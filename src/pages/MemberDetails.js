import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './MemberDetails.css';

const MemberDetails = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/members/${id}`);
        setMember(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching member:', err);
        setError('Failed to load member data.');
        setLoading(false);
      }
    };

    fetchMember();
  }, [id]);

  if (loading) {
    return (
      <div className="member-details">
        <p>Loading member details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="member-details">
        <p className="error-message">{error}</p>
      </div>
    );
  }

  return (
    <div className="member-details">
      <div className="card">
        <img
          src={`http://localhost:5001/uploads/${member.image}`}
          alt={member.name}
          className="member-image"
        />
        <h2 className="member-name">{member.name}</h2>
        <p><strong>Role:</strong> {member.role}</p>
        <p><strong>Email:</strong> {member.email}</p>
      </div>
    </div>
  );
};

export default MemberDetails;
