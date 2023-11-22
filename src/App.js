// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClientsTable from './components/client/ClientTable';
import AddClientForm from './components/client/AddClientForm';
import UpdateClientForm from './components/client/UpdateClientForm';
import DeleteClientButton from './components/client/DeleteClientButton';

import './App.css';
import './css/ClientTable.css';
import './css/UpdateClientButton.css';
import './css/DeleteClientButton.css';
import 'D:\\Univer\\5 сем\\КПЗ\\React_laba\\laba1\\src\\css\\AddClientForm.css';

function App() {
  const [clients, setClients] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedClientId, setSelectedClientId] = useState();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fetchClients = async () => {
    try {
      const response = await axios.get('https://localhost:7050/api/Client/short-list');
      const adaptedClients = response.data.map(client => ({
        id: client.id,
        firstName: client.firstName,
        lastName: client.lastName,
        age: client.age,
      }));
      setClients(adaptedClients);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

  const handleUpdateClient = async (clientId) => {
    setSelectedClientId(clientId);
    setShowUpdateForm(true);
    fetchClients();
  };

  const handleDeleteClient = async (clientId) => {
    setSelectedClientId(clientId);
    
    const response = await axios.delete(`https://localhost:7050/api/Client/delete/${clientId}`);
    fetchClients();
    setSelectedClientId(null);
  };

  const handleAddClient = async () => {
    try {

      const clientData = {
        firstName: firstName,
        lastName: lastName,
      };
      fetchClients();

      setFirstName('');
      setLastName('');
    } catch (error) {
      console.error('Error adding client:', error);
    }
  };
  
  useEffect(() => {
    fetchClients();
  }, []); 


  return (
    <div>
      <h1>Jewelry Clients</h1>
      <AddClientForm
        onAdd={handleAddClient}
        // Передайте значення та обробники зміни для полів у компонент форми
        firstName={firstName}
        lastName={lastName}
        onFirstNameChange={(e) => setFirstName(e.target.value)}
        onLastNameChange={(e) => setLastName(e.target.value)}
      />
      <ClientsTable
        clients={clients}
        onSelectUpdate={handleUpdateClient}
        onSelectDelete={handleDeleteClient}
      />
      {showUpdateForm && selectedClientId && (
        <UpdateClientForm
          clientId={selectedClientId}
          onUpdate={handleUpdateClient}
        />
      )}

    </div>
  );
}

export default App;
