// src/components/UpdateClientForm.js
import React, { useState } from 'react';
import axios from 'axios';


const UpdateClientForm = ({ clientId, onUpdate }) => {
  const [lastName, setLastName] = useState('');

  const handleUpdateClient = async () => {
    try {
      const config = { headers: {'Content-Type': 'application/json'} };
      await axios.put(`https://localhost:7050/api/Client/update-last-name/${clientId}`, 
       lastName, config
      );
      onUpdate();
    } catch (error) {
      console.error('Error updating client:', error);
    }
  };

  return (
    <div className="update-client-form">
      <h2>Update Client</h2>
      <label>Last Name: </label>
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <br />
      <button className="update-form-button" onClick={handleUpdateClient}>Update Client</button>
    </div>
  );
};

export default UpdateClientForm;
