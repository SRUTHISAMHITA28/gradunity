import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Mentorship = () => {
  const [mentorships, setMentorships] = useState([]);

  useEffect(() => {
    const fetchMentorships = async () => {
      const response = await axios.get('/api/mentorships');
      setMentorships(response.data);
    };

    fetchMentorships();
  }, []);

  return (
    <div>
      <h2>Mentorship Program</h2>
      {mentorships.map(mentorship => (
        <div key={mentorship.id}>
          <h3>Mentor: {mentorship.mentor_id}</h3>
          <p>Status: {mentorship.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Mentorship;
