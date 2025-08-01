import React, { useEffect, useState } from 'react';

function AdminDashboard() {
  const [jobs, setJobs] = useState([]);
  const [stats, setStats] = useState({ users: 0, jobs: 0 });

  useEffect(() => {
    fetchJobs();
    fetchStats();
  }, []);

  const fetchJobs = async () => {
     const res = await fetch('http://localhost:5000/api/data');

    const data = await res.json();
    setJobs(data);
  };

  const fetchStats = async () => {
    const res = await fetch('http://localhost:5000/api/stats');
    const data = await res.json();
    setStats(data);
  };

  const handleApproval = async (id, approved) => {
    await fetch(`http://localhost:5000/api/approve-job/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ approved }),
    });
    fetchJobs();
  };

  return (
    <div className="admin-dashboard">
      <h2>📊 Admin Dashboard</h2>
      <p>Total Users: {stats.users}</p>
      <p>Total Jobs: {stats.jobs}</p>

      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>City</th>
            <th>Job Title</th>
            <th>Approved</th>
            <th>Actions</th>
          </tr> 
        </thead>
        <tbody>
          {jobs.map(job => (
            <tr key={job._id}>
              <td>{job.userName}</td>
              <td>{job.city}</td>
              <td>{job.jobTitle}</td>
              <td>{job.approved ? '✅' : '❌'}</td>
              <td>
                <button onClick={() => handleApproval(job._id, true)}>Approve</button>
                <button onClick={() => handleApproval(job._id, false)}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;


// admin@gmail.com //
