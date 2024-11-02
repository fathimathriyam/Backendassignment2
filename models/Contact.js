const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true 
  }
}, { timestamps: true }); 

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
