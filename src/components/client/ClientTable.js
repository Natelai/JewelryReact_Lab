// src/components/ClientsTable.js
import React from 'react';
import UpdateClientButton from './UpdateClientButton';
import DeleteClientButton from './DeleteClientButton';

import 'D:\\Univer\\5 сем\\КПЗ\\React_laba\\laba1\\src\\css\\ClientTable.css';

const ClientsTable = ({ clients, onSelectUpdate, onSelectDelete }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.firstName}</td>
              <td>{client.lastName}</td>
              <td>{client.age}</td>
              <td>
                <UpdateClientButton
                  clientId={client.id}
                  onSelectUpdate={onSelectUpdate}
                />
                <DeleteClientButton
                  clientId={client.id}
                  onSelectDelete={onSelectDelete}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default ClientsTable;