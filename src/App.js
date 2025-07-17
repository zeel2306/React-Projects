import { useState } from 'react';
import * as XLSX from 'xlsx';
import './App.css';

function App() {
    const registeredEmails=[
    'zeelprakashpatel03@gmail.com',
    'pkpatelsolvay@gmail.com',
    'varshaprakashpatel@gmail.com'
  ]
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

   const handleGetStarted = () => {
    if (!email.trim()) {
      setEmailError('Email address is required');
    } else if (!registeredEmails.includes(email.trim().toLowerCase())) {
      setEmailError('Your email ID is not valid or registered');
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

    const dataToExport = [{ Email: email, ...formData }];
    const worksheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "User Data");
    XLSX.writeFile(workbook, "user_data.xlsx"); // 📥 still downloading to client

    alert("Form submitted and data saved to Excel!");

    // Reset form
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
      workplatform: '', // ✅ fixed here too
    });
    setShowForm(false);
  };

  return (
    <div className="container">
      <nav>
        <div className="container_logo">MyLogo</div>
        <div className="menu_list">
          <ul>
            <li><a href="#">Products</a></li>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>

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
                placeholder="Enter your email"
                className="email_input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="get_started_btn" onClick={handleGetStarted}>Get Started</button>
              {emailError && <p style={{ color: 'red', marginTop: '10px' }}>{emailError}</p>}
            </div>
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
                <button type="submit" className="submit_btn">Submit & Download</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
