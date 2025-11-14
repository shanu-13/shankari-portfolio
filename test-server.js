import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

console.log('Testing server setup...');
console.log('EMAIL_USER:', process.env.EMAIL_USER ? 'Set' : 'Not set');
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Set' : 'Not set');
console.log('OWNER_EMAIL:', process.env.OWNER_EMAIL ? 'Set' : 'Not set');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  console.log('Contact form submitted:', req.body);
  res.json({ message: 'Test successful' });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log('Contact form endpoint: http://localhost:3001/api/contact');
});