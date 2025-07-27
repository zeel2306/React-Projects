import React, { useState, useEffect } from 'react';
import './App.css';
import LoginPage from './Loginpage';
import AdminDashboard from './AdminDashboard';
import Home from './Home';

const formFields = [
  { name: 'userName', placeholder: 'Full Name' },
  { name: 'mobile', placeholder: 'Mobile Number' },
  { name: 'city', placeholder: 'City' },
  { name: 'education', placeholder: 'Education' },
  { name: 'year', placeholder: 'Passing Year' },
  { name: 'cgpa', placeholder: 'CGPA or Percentage' },
  { name: 'currentCtc', placeholder: 'Current CTC' },
  { name: 'expectedCtc', placeholder: 'Expected CTC' },
  { name: 'experience', placeholder: 'Experience' },
  { name: 'workplatform', placeholder: 'Work Platform' },
];

const SECTIONS = {
  browse: 'Current opening',
  post: 'Post a Job',
  advice: 'Career Advice',
  contact: 'Contact Us',
  admin: 'Admin',
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const [selectedSection, setSelectedSection] = useState('browse');
  const [isAdmin, setIsAdmin] = useState(false);
  const [jobs, setJobs] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [formData, setFormData] = useState(
    formFields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
  );

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

    if (email === 'admin@gmail.com' && password === 'password') {
      setIsAdmin(true);
      setLoggedIn(true);
      setSelectedSection('admin');
    } else {
      setIsAdmin(false);
      setLoggedIn(true);
      setSelectedSection('browse');
    }
  };

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
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, ...formData }),
    })
      .then(res => {
        if (res.ok) {
          alert('✅ Form submitted and data saved to MongoDB!');
          setEmail('');
          setFormData(formFields.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {}));
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

  if (loggedIn && isAdmin) {
    return <AdminDashboard />;
  }

  return (
    <div className="container">
      <nav>
        <div className="container_logo">MyLogo</div>
        <div className="menu_list">
          <ul>
            {Object.entries(SECTIONS).map(([key, label]) =>
              key === 'admin' && !isAdmin ? null : (
                <li key={key}>
                  <button onClick={() => setSelectedSection(key)}>{label}</button>
                </li>
              )
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

        {selectedSection === 'post' && (
          <div>
            <h2>📝 Post a Job</h2>
            <p>Want to hire? Post a job to reach top talent instantly.</p>
          </div>
        )}
        {selectedSection === 'advice' && (
          <div>
            <h2>💡 Career Advice</h2>
            <p>Get expert tips on resumes, interviews, and career growth.</p>
          </div>
        )}
        {selectedSection === 'contact' && (
          <div>
            <h2>📞 Contact Us</h2>
            <p>Email: support@example.com</p>
            <p>Phone: +91 12345 67890</p>
            <p>Address: 123 Tech Park, Ahmedabad, India</p>
            <p>Hours: Mon - Fri, 9AM - 6PM</p>
          </div>
        )}
      </div>

      <div className="content">
        <div className="hero_text">
          <p className="content_para">Trusted Over 28,000+ Companies</p>
          <h1>Find Your <span className="green-text">Remote Job</span></h1>
          <h1>Easy And Fast.</h1>
          <p className="subheading">Join thousands finding remote work opportunities worldwide.</p>

          {!showForm ? (
            <div className="email_form">
              <input
                type="email"
                placeholder="Enter your Registered Email"
                className="email_input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="get_started_btn" onClick={handleGetStarted}>Get Started</button>
              {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
            </div>
          ) : (
            <div className="user_form">
              <h2>Fill Your Details</h2>
              <form onSubmit={handleSubmit}>
                {formFields.map(field => (
                  <input
                    key={field.name}
                    type="text"
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleFormChange}
                    placeholder={field.placeholder}
                    required
                  />
                ))}
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
