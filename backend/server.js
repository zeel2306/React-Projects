const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const FormData = require('./models/FormData'); // Mongoose model


const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/jobform', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// POST route to save form data
app.post('/api/submit', async (req, res) => {
  try {
    const newData = new FormData(req.body);
    await newData.save();
    res.status(200).json({ message: '✅ Data saved to MongoDB' });
  } catch (error) {
    console.error('❌ Error saving data:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE a job by ID
app.delete('/api/delete-job/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Job.findByIdAndDelete(id);  // Make sure Job model is imported
    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.error('Error deleting job:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/data', async (req, res) => {
  try {
    const allData = await FormData.find();
    res.status(200).json(allData);
  } catch (error) {
    console.error('❌ Error fetching data:', error);
    res.status(500).json({ error: 'Server error' });
  }
});
const handleDelete = async (id) => {
  if (window.confirm('Are you sure you want to delete this job?')) {
    await fetch(`http://localhost:5000/api/delete-job/${id}`, {
      method: 'DELETE',
    });
    fetchJobs(); // refresh the list
  }
};




// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});


// http://localhost:5000/api/data  for view store data//
 // run code for backend //
 // cd backend //
 // node server.js//