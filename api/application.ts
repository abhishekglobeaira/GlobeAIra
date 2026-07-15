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

  const { name, email, phone, experience, skills, jobTitle, cvFile, testAnswers } = req.body;

  if (!name || !email || !phone || !experience || !skills || !jobTitle) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  const storedCvFile = cvFile
    ? {
        name: cvFile.name,
        type: cvFile.type,
        size: cvFile.size,
        data: cvFile.data ? Buffer.from(cvFile.data, 'base64') : null,
      }
    : null;

  try {
    const dbClient = await connectClient();
    const db = dbClient.db(dbName);
    const collection = db.collection('applications');

    const result = await collection.insertOne({
      name,
      email,
      phone,
      experience,
      skills,
      jobTitle,
      cvFile: storedCvFile,
      testAnswers: testAnswers || {},
      createdAt: new Date(),
    });

    res.status(200).json({ success: true, id: result.insertedId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to save application' });
  }
}
