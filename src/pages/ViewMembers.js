import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MemberCard from '../components/MemberCard';
import './ViewMembers.css';

const ViewMembers = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/members');
        setMembers(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching members:', err);
        setError('Failed to load team members.');
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (loading) {
    return (
      <div className="view-members">
        <h2>Team Members</h2>
        <p>Loading members...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="view-members">
        <h2>Team Members</h2>
        <p className="error-message">{error}</p>
      </div>
    );
  }

  return (
    <div className="view-members">
      <h2 className="members-title">Team Members</h2>
      <div className="members-grid">
        {members.length === 0 ? (
          <p>No members found.</p>
        ) : (
          members.map((member) => (
            <MemberCard key={member._id} member={member} />
          ))
        )}
      </div>
    </div>
  );
};

export default ViewMembers;
