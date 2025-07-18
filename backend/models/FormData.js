const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  email: String,
  userName: String,
  mobile: String,
  city: String,
  education: String,
  year: String,
  cgpa: String,
  currentCtc: String,
  expectedCtc: String,
  experience: String,
  workplatform: String
});

module.exports = mongoose.model('FormData', formSchema);
