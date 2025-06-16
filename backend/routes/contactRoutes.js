import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

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

// Contact endpoint
router.post('/', async (req, res) => {
  // Set CORS headers
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Origin');
  
  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

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

export default router; 