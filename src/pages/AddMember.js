import React, { useState } from 'react';
import axios from 'axios';
import './AddMember.css';

function AddMember() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    image: null,
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.role || !formData.email || !formData.image) {
      setMessage('Please fill all fields and upload an image.');
      return;
    }

    const data = new FormData();
    data.append('name', formData.name);
    data.append('role', formData.role);
    data.append('email', formData.email);
    data.append('image', formData.image);

    try {
      await axios.post('http://localhost:5001/api/members', data);
      setMessage('Member added successfully!');
      setFormData({ name: '', role: '', email: '', image: null });
    } catch (error) {
      console.error(error);
      setMessage('Error adding member.');
    }
  };

  return (
    <div className="add-member">
      <h2>Add New Team Member</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Role.No:</label>
        <input type="text" name="role" value={formData.role} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Upload Image:</label>
        <input type="file" name="image" accept="image/*" onChange={handleChange} required />

        <button type="submit">Add Member</button>
      </form>
    </div>
  );
}

export default AddMember;
