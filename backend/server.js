import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Enhanced CORS configuration
app.use(cors({
  origin: [
    'http://localhost:3001',
    'http://127.0.0.1:3001',
    process.env.CLIENT_URL
  ].filter(Boolean),
  credentials: true
}));

app.use(express.json());

// Improved MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000
    });
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  }
};

connectDB();

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Name is required'] 
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'],
    match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
  },
  message: { 
    type: String, 
    maxlength: 500 
  }
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

// Improved API endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email) {
      return res.status(400).json({ 
        success: false,
        message: 'Name and email are required'
      });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();
    
    return res.status(201).json({
      success: true,
      message: 'Message received successfully',
      data: newContact
    });
  } catch (err) {
    console.error('Contact submission error:', err);
    
    const statusCode = err instanceof mongoose.Error.ValidationError ? 400 : 500;
    const message = err.message || 'Server error';
    
    return res.status(statusCode).json({
      success: false,
      message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    dbStatus: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

const PORT = parseInt(process.env.PORT || '4000', 10);
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`🚀 Server running on http://${HOST}:${PORT}`);
});