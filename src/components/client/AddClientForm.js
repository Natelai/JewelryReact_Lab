// src/components/AddClientForm.js
import React, { useState } from 'react';
import axios from 'axios';

import 'D:\\Univer\\5 сем\\КПЗ\\React_laba\\laba1\\src\\css\\AddClientForm.css';

const AddClientForm = ({ onAdd }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('')
  const [clients, setClients] = useState([]);

  const handleAddClient = async () => {
    try {
      await axios.post('https://localhost:7050/api/Client/add', {
        firstName,
        lastName,
        age,
      });

      onAdd();

      setFirstName('');
      setLastName('');
      setAge('');
    } catch (error) {
      console.error('Error adding client:', error);
    }
  };

  return (
    <div className="add-client-form">
      <h4>Add Client</h4>
      <label>First Name: </label>
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <br />
      <label>Last Name: </label>
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <br />
      <label>Client  age : </label>
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      <br />
      <button className="add-client-button" onClick={handleAddClient}>Add Client</button>
    </div>
  );
};

export default AddClientForm;
