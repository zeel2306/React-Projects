const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const FormData = require('./models/FormData'); // Mongoose model


const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());


// job listed
app.get('/api/jobs', (req, res) => {
  res.json([
    { id: 1, title: "Frontend Developer", company: "TechCorp", location: "Remote" },
    { id: 2, title: "Backend Engineer", company: "DevHouse", location: "Ahmedabad" },
    { id: 3, title: "UI/UX Designer", company: "DesignIt", location: "Mumbai" },
    { id: 4, title: "Data Engineer" ,company:"ufdtech", location:"pune"},
  ]);
});

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
    await FormData.findByIdAndDelete(id); // ✅ Use correct model
    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.error('❌ Error deleting job:', error);
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

// PATCH route to approve/reject a job by ID
app.patch('/api/approve-job/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { approved } = req.body;
    
    console.log('🔍 Approving job with ID:', id, 'Status:', approved);
    
    const updatedJob = await FormData.findByIdAndUpdate(
      id, 
      { approved: approved },
      { new: true }
    );
    
    if (!updatedJob) {
      console.log('❌ Job not found with ID:', id);
      return res.status(404).json({ message: 'Job not found' });
    }
    
    console.log('✅ Job updated successfully:', updatedJob._id);
    res.json({ message: 'Job approval status updated successfully', job: updatedJob });
  } catch (error) {
    console.error('❌ Error updating job approval:', error);
    res.status(500).json({ message: 'Server error: ' + error.message });
  }
});

// GET route for stats
app.get('/api/stats', async (req, res) => {
  try {
    const totalJobs = await FormData.countDocuments();
    const totalUsers = await FormData.countDocuments(); // Assuming one job per user for now
    res.json({ users: totalUsers, jobs: totalJobs });
  } catch (error) {
    console.error('❌ Error fetching stats:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});


// http://localhost:5000/api/data  for view store data//
 // run code for backend //
 // cd backend //
 // node server.js//