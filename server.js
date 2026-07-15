import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/Globeaira';
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.example.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '465', 10);
const SMTP_USER = (process.env.SMTP_USER || 'connect@globeaira.com').trim();
const SMTP_PASS = (process.env.SMTP_PASS || 'advw ymvl dpdc mtry').replace(/\s+/g, '');
const EMAIL_FROM = (process.env.EMAIL_FROM || SMTP_USER).trim();
const EMAIL_TO = (process.env.EMAIL_TO || 'connect@globeaira.com');

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
  emailSent: { type: Boolean, default: false },
  emailError: String,
  createdAt: { type: Date, default: Date.now },
});

const emailLogSchema = new mongoose.Schema({
  recipient: { type: String, required: true },
  subject: { type: String, required: true },
  body: String,
  success: { type: Boolean, default: false },
  error: String,
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema);
const Application = mongoose.model('Application', applicationSchema);
const EmailLog = mongoose.model('EmailLog', emailLogSchema);

app.get(['/health', '/api/health'], (_req, res) => {
  res.json({ status: 'ok', database: MONGO_URI });
});

app.post(['/contact', '/contacts', '/api/contact', '/api/contacts'], async (req, res) => {
  try {
    const contact = await Contact.create(req.body);

    const emailHtml = `
      <h1>New Contact Request</h1>
      <p><strong>Name:</strong> ${contact.name}</p>
      <p><strong>Email:</strong> ${contact.email}</p>
      <p><strong>Phone:</strong> ${contact.phone}</p>
      <p><strong>Company:</strong> ${contact.companyName || 'N/A'}</p>
      <p><strong>Project Type:</strong> ${contact.projectType || 'N/A'}</p>
      <p><strong>Message:</strong> ${contact.projectDetails || 'N/A'}</p>
    `;

    const emailLog = await sendNotificationEmail('New Contact Request', emailHtml);

    res.status(201).json({
      success: true,
      message: emailLog.success
        ? 'Contact request saved and email sent.'
        : 'Contact request saved but email delivery failed.',
      emailSent: emailLog.success,
      emailError: emailLog.error,
      contact,
    });
  } catch (error) {
    console.error('Contact save failed:', error);
    res.status(500).json({ success: false, message: 'Unable to save contact request.' });
  }
});

app.post(['/application', '/applications', '/api/application', '/api/applications'], upload.single('cvFile'), async (req, res) => {
  try {
    const application = new Application({
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

    await application.save();

    const emailHtml = `
      <h1>New Job Application</h1>
      <p><strong>Name:</strong> ${application.name}</p>
      <p><strong>Email:</strong> ${application.email}</p>
      <p><strong>Phone:</strong> ${application.phone}</p>
      <p><strong>Job Title:</strong> ${application.jobTitle || 'N/A'}</p>
      <p><strong>Experience:</strong> ${application.experience || 'N/A'}</p>
      <p><strong>Skills:</strong> ${application.skills || 'N/A'}</p>
      <p><strong>Q1:</strong> ${application.testAnswers.q1 || 'N/A'}</p>
      <p><strong>Q2:</strong> ${application.testAnswers.q2 || 'N/A'}</p>
      <p><strong>Q3:</strong> ${application.testAnswers.q3 || 'N/A'}</p>
      <p><strong>Q4:</strong> ${application.testAnswers.q4 || 'N/A'}</p>
      <p><strong>Q5:</strong> ${application.testAnswers.q5 || 'N/A'}</p>
    `;

    const attachments = req.file
      ? [{ filename: req.file.originalname, content: req.file.buffer }]
      : [];

    const emailLog = await sendNotificationEmail('New Job Application', emailHtml, attachments);

    application.emailSent = emailLog.success;
    application.emailError = emailLog.error;
    await application.save();

    res.status(201).json({
      success: true,
      message: emailLog.success
        ? 'Application saved and email sent.'
        : 'Application saved but email delivery failed.',
      emailSent: emailLog.success,
      emailError: emailLog.error,
      application,
    });
  } catch (error) {
    console.error('Application save failed:', error);
    res.status(500).json({ success: false, message: 'Unable to save application.' });
  }
});

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const sendNotificationEmail = async (subject, html, attachments = []) => {
  const emailLog = new EmailLog({
    recipient: EMAIL_TO,
    subject,
    body: html,
  });

  try {
    const info = await transporter.sendMail({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject,
      text: html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(),
      html,
      attachments,
    });

    console.log('Email sent:', info.messageId, 'to', EMAIL_TO);
    emailLog.success = true;
  } catch (error) {
    console.error('Email send failed:', error);
    emailLog.success = false;
    emailLog.error = error instanceof Error ? error.message : String(error);
  }

  await emailLog.save();
  return emailLog;
};

app.get(['/email-logs', '/api/email-logs'], async (_req, res) => {
  try {
    const logs = await EmailLog.find().sort({ createdAt: -1 }).limit(50);
    res.json({ success: true, logs });
  } catch (error) {
    console.error('Failed to read email logs:', error);
    res.status(500).json({ success: false, message: 'Unable to read email logs.' });
  }
});

const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(`Connected to MongoDB at ${MONGO_URI}`);
    console.log(`SMTP host=${SMTP_HOST} port=${SMTP_PORT} user=${SMTP_USER} target=${EMAIL_TO}`);

    transporter.verify((error, success) => {
      if (error) {
        console.warn('SMTP transporter verification failed:', error);
      } else {
        console.log('SMTP transporter ready:', success);
      }
    });

    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

startServer();