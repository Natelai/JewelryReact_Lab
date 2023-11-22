// src/components/DeleteClientButton.js
import React from 'react';

import 'D:\\Univer\\5 сем\\КПЗ\\React_laba\\laba1\\src\\css\\DeleteClientButton.css';

const DeleteClientButton = ({ clientId, onSelectDelete }) => {
  const handleClick = () => {
    onSelectDelete(clientId);
  };

  return (
    <button onClick={handleClick} className="delete-button">
      Delete
    </button>
  );
};

export default DeleteClientButton;
