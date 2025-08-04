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
    try {
      const res = await fetch(`http://localhost:5000/api/approve-job/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ approved }),
      });

      const data = await res.json();
      if (!res.ok) {
        console.error('❌ Approval failed:', data);
        return alert('Approval failed: ' + data.message);
      }

      alert(approved ? '✅ Job approved successfully!' : '❌ Job rejected successfully!');
      fetchJobs(); // Refresh list
    } catch (err) {
      console.error('❌ Network/server error:', err);
      alert('Server error while updating job approval status');
    }
  };

  const handleDelete = async (id) => {
  const confirmDelete = window.confirm('Are you sure you want to delete this job?');
  if (!confirmDelete) return;

  try {
    const res = await fetch(`http://localhost:5000/api/delete-job/${id}`, {
      method: 'DELETE',
    });

    const data = await res.json();
    if (!res.ok) {
      console.error('❌ Delete failed:', data);
      return alert('Delete failed: ' + data.message);
    }

    alert('✅ Job deleted');
    fetchJobs();
  } catch (err) {
    console.error('❌ Network/server error:', err);
    alert('Server error while deleting job');
  }
};


  return (
    <div className="admin-dashboard">
      <h2>📊 Admin Dashboard</h2>
      <p>Total Users: {stats.users}</p>
      <p>Total Jobs: {stats.jobs}</p>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>City</th>
            <th>Approved</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job._id}>
              <td>{job.userName}</td>
              <td>{job.email}</td>
              <td>{job.mobile}</td>
              <td>{job.city}</td>
              <td>{job.approved ? '✅' : '❌'}</td>
                 <td>
  {!job.approved && (
    <button onClick={() => handleApproval(job._id, true)}>✅ Approve</button>
  )}
  {job.approved && (
    <button onClick={() => handleApproval(job._id, false)}>❌ Reject</button>
  )}
  <button onClick={() => handleDelete(job._id)}>🗑️ Delete</button>
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;

