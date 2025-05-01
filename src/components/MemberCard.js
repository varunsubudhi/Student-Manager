import React from 'react';
import { Link } from 'react-router-dom';
import './MemberCard.css';

function MemberCard({ member }) {
  return (
    <div className="member-card">
      <img src={`http://localhost:5001/uploads/${member.image}`} alt={member.name} />
      <h3>{member.name}</h3>
      <p>{member.role}</p>
      <Link to={`/members/${member._id}`} className="view-btn">View Details</Link>
    </div>
  );
}

export default MemberCard;
