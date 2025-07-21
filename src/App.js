import React, { useState, useEffect } from 'react';
import './App.css';
import LoginPage from './Loginpage';
import AdminDashboard from './AdminDashboard';
import Home from './Home';




function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const [selectedSection, setSelectedSection] = useState('browse');
  const [isAdmin, setIsAdmin] = useState(false);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
  if (selectedSection === 'browse') {
    fetch('http://localhost:5000/api/jobs')
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(err => console.error('Failed to fetch jobs:', err));
  }
}, [selectedSection]);



 const handleLogin = (email, password) => {
  setUserInfo({ email, password });

  // Simple check: if admin, show admin view
  if (email === 'admin@gmail.com' && password === 'password') {
    setIsAdmin(true);         // Track if admin
    setLoggedIn(true);        // Mark as logged in
    setSelectedSection('admin');
  } else {
    // Let regular users log in too (for demo, no password check)
    setIsAdmin(false);        // Regular user
    setLoggedIn(true);
    setSelectedSection('browse');
  }
};


  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [formData, setFormData] = useState({
    userName: '',
    mobile: '',
    city: '',
    education: '',
    year: '',
    cgpa: '',
    currentCtc: '',
    expectedCtc: '',
    experience: '',
    workplatform: '',
  });

  const registeredEmails = ['user@gmail.com', 'test@gmail.com'];

const handleGetStarted = () => {
  if (!email.trim()) {
    setEmailError('Email address is required');
  } else {
    setEmailError('');
    setShowForm(true);
  }
};


  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        ...formData
      }),
    })
      .then(res => {
        if (res.ok) {
          alert('✅ Form submitted and data saved to MongoDB!');
          setEmail('');
          setFormData({
            userName: '',
            mobile: '',
            city: '',
            education: '',
            year: '',
            cgpa: '',
            currentCtc: '',
            expectedCtc: '',
            experience: '',
            workplatform: '',
          });
          setShowForm(false);
        } else {
          alert('❌ Something went wrong!');
        }
      })
      .catch(err => {
        console.error(err);
        alert('❌ Server error');
      });
  };

  // Show login first
if (!loggedIn) {
  return (
    <div className="container">
      <div className="content">
        <div className="hero_text">
          <LoginPage onLogin={handleLogin} />
        </div>
      </div>
    </div>
  );
}

if (loggedIn && userInfo.email === 'admin@gmail.com') {
  return <AdminDashboard />;
}

  // Main app after login
  return (
    
    <div className="container">
      <nav >
        <div className="container_logo">MyLogo</div>
        <div className="menu_list">
          <ul>
  <li><button onClick={() => setSelectedSection('browse')}>Current opening</button></li>
  <li><button onClick={() => setSelectedSection('post')}>Post a Job</button></li>
  <li><button onClick={() => setSelectedSection('advice')}>Career Advice</button></li>
  <li><button onClick={() => setSelectedSection('contact')}>Contact Us</button></li>
  {userInfo.email === 'admin@gmail.com' && (
    <li><button onClick={() => setSelectedSection('admin')}>Admin</button></li>
  )}
</ul>

        </div>
       
      </nav>
      <div className="section-content">
  {selectedSection === 'browse' && (
  <div className="job-listings">
    <h2>🔍 Available Jobs</h2>
    {jobs.length === 0 ? (
      <p>No jobs found.</p>
    ) : (
      jobs.map((job) => (
        <div key={job.id} className="job-card">
          <h3>{job.title}</h3>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <button className="apply_btn">Apply Now</button>
        </div>
      ))
    )}
  </div>
)}

  {selectedSection === 'post' && <p>📝 Post a new job here...</p>}
  {selectedSection === 'advice' && <p>💡 Tips and career advice for job seekers...</p>}
  {selectedSection === 'contact' && <p>📞 Contact us at support@example.com</p>}
</div>


      <div className="content">
        <div className="hero_text">
          <p className="content_para">Trusted Over 28,000+ Companies</p>
          <h1>Find Your <span className="green-text">Remote Job</span></h1>
          <h1>Easy And Fast.</h1>
          <p className="subheading">Join thousands finding remote work opportunities worldwide.</p>

          {!showForm ? (
            <>
              <div className="email_form">
                <input
                  type="email"
                  placeholder="Enter your Register email"
                  className="email_input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="get_started_btn" onClick={handleGetStarted}>Get Started</button>
                {emailError && <p style={{ color: 'red', marginTop: '10px' }}>{emailError}</p>}
              </div>

              {selectedSection === 'contact' && (
                <div className="section-content">
                  <h2>📞 Contact Us</h2>
                  <p>Email: support@example.com</p>
                  <p>Phone: +91 12345 67890</p>
                  <p>Address: 123 Tech Park, Ahmedabad, India</p>
                  <p>Working Hours: Mon - Fri, 9AM - 6PM</p>
                </div>
              )}
              {selectedSection === 'post' && (
                <>
                  <h2>📝 Post a Job</h2>
                  <p>Want to hire? Post a job to reach top talent instantly.</p>
                  <p>Fill out job details, requirements, and salary range easily.</p>
                </>
              )}
              {selectedSection === 'advice' && (
                <>
                  <h2>💡 Career Advice</h2>
                  <p>Get expert tips on resumes, interviews, and career growth.</p>
                  <p>Boost your job search strategy with professional insights.</p>
                </>
              )}
            </>
          ) : (
            <div className="user_form">
              <h2>Fill Your Details</h2>
              <form onSubmit={handleSubmit}>
                <input type="text" name="userName" value={formData.userName} onChange={handleFormChange} placeholder="Full Name" required />
                <input type="text" name="mobile" value={formData.mobile} onChange={handleFormChange} placeholder="Mobile Number" required />
                <input type="text" name="city" value={formData.city} onChange={handleFormChange} placeholder="City" required />
                <input type="text" name="education" value={formData.education} onChange={handleFormChange} placeholder="Education" required />
                <input type="text" name="year" value={formData.year} onChange={handleFormChange} placeholder="Passing Year" required />
                <input type="text" name="cgpa" value={formData.cgpa} onChange={handleFormChange} placeholder="CGPA or Percentage" required />
                <input type="text" name="currentCtc" value={formData.currentCtc} onChange={handleFormChange} placeholder="Current CTC" required />
                <input type="text" name="expectedCtc" value={formData.expectedCtc} onChange={handleFormChange} placeholder="Expected CTC" required />
                <input type="text" name="experience" value={formData.experience} onChange={handleFormChange} placeholder="Experience" required />
                <input type="text" name="workplatform" value={formData.workplatform} onChange={handleFormChange} placeholder="Work Platform" required />
                <button type="submit" className="submit_btn">Submit</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
