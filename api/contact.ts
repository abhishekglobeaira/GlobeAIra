import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = process.env.MONGODB_DB || 'Globeaira';
let cachedClient: MongoClient | null = null;

async function connectClient() {
  if (!cachedClient) {
    cachedClient = new MongoClient(uri);
    await cachedClient.connect();
    console.log(`MongoDB connected to ${uri}, database ${dbName}`);
  }
  return cachedClient;
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, email, phone, company, projectType, message } = req.body;

  if (!name || !email || !phone || !projectType || !message) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  try {
    const dbClient = await connectClient();
    const db = dbClient.db(dbName);
    const collection = db.collection('contactRequests');

    const result = await collection.insertOne({
      name,
      email,
      phone,
      company: company || '',
      projectType,
      message,
      createdAt: new Date(),
    });

    res.status(200).json({ success: true, id: result.insertedId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to save contact request' });
  }
}
