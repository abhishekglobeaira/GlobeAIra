import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/Globeaira';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const upload = multer({ storage: multer.memoryStorage() });

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  companyName: String,
  projectType: String,
  projectDetails: String,
  createdAt: { type: Date, default: Date.now },
});

const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  experience: String,
  skills: String,
  jobTitle: String,
  cvFileName: String,
  testAnswers: {
    q1: String,
    q2: String,
    q3: String,
    q4: String,
    q5: String,
  },
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema);
const Application = mongoose.model('Application', applicationSchema);

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', database: MONGO_URI });
});

app.post('/contacts', async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json({ success: true, message: 'Contact request saved.', contact });
  } catch (error) {
    console.error('Contact save failed:', error);
    res.status(500).json({ success: false, message: 'Unable to save contact request.' });
  }
});

app.post('/applications', upload.single('cvFile'), async (req, res) => {
  try {
    const application = await Application.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      experience: req.body.experience,
      skills: req.body.skills,
      jobTitle: req.body.jobTitle,
      cvFileName: req.file?.originalname || null,
      testAnswers: {
        q1: req.body.q1,
        q2: req.body.q2,
        q3: req.body.q3,
        q4: req.body.q4,
        q5: req.body.q5,
      },
    });

    res.status(201).json({ success: true, message: 'Application saved.', application });
  } catch (error) {
    console.error('Application save failed:', error);
    res.status(500).json({ success: false, message: 'Unable to save application.' });
  }
});

const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`Connected to MongoDB at ${MONGO_URI}`);

    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

startServer();
