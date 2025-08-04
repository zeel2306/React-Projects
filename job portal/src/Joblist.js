import React, { useEffect, useState } from 'react';

const JobsList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/jobs')
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(err => console.error('Failed to fetch jobs:', err));
  }, []);

  return (
    <div className="section-content">
      <h2>🔥 Available Jobs</h2>
      {jobs.map(job => (
        <div key={job.id} className="job-card" style={{
          backgroundColor: "rgba(255,255,255,0.1)",
          padding: "20px",
          margin: "10px 0",
          borderRadius: "8px"
        }}>
          <h3>{job.title}</h3>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <button className="get_started_btn">Apply Now</button>
        </div>
      ))}
    </div>
  );
};

export default JobsList;
