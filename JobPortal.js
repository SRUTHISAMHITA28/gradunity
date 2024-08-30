import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobPortal = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await axios.get('/api/jobs');
      setJobs(response.data);
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <h2>Job Portal</h2>
      {jobs.map(job => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.description}</p>
          <p>{job.location}</p>
        </div>
      ))}
    </div>
  );
};

export default JobPortal;
