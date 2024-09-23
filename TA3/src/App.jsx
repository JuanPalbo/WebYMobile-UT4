import React, { useState } from 'react';
import './App.css';

const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setMessage((prevMessage) => prevMessage + inputValue + '\n');
      setInputValue('');
    }
  };

  const handleDeleteLine = () => {
    /*apretar enter sin escribir nada rompe un poco esto*/
    const lines = message.trim().split('\n');
    lines.pop();
    setMessage(lines.join('\n'));
  };

  return (
    <div className="input-container">
      <div className="input-row">
        <input
          type="text"
          placeholder="Escribe algo y presiona Enter..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="input-field"
        />
        <button onClick={handleDeleteLine} className="delete-button">
          Borrar Línea
        </button>
      </div>
      <p className="input-display" style={{ whiteSpace: 'pre-line' }}>
        {message}
      </p>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <h1>TA3</h1>
      <Input />
    </div>
  );
};

export default App;
