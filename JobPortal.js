// src/components/JobPortal.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function JobPortal() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch job listings (to be implemented)
    axios.get('http://localhost:5000/jobs').then(response => {
      setJobs(response.data);
    }).catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <div className="job-portal">
      <h2>Job Portal</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p>Location: {job.location}</p>
            <p>Posted by: {job.postedBy}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobPortal;
