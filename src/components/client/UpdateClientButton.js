// src/components/UpdateClientButton.js
import React from 'react';

import 'D:\\Univer\\5 сем\\КПЗ\\React_laba\\laba1\\src\\css\\UpdateClientButton.css';

const UpdateClientButton = ({ clientId, onSelectUpdate }) => {
  const handleClick = () => {
    onSelectUpdate(clientId);
  };

  return (
    <button className="update-client-button" onClick={handleClick}>
      Update
    </button>
  );
};

export default UpdateClientButton;
