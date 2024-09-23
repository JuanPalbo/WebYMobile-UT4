//useRef para seleccionar el input al clickear en un elemento de la lista
import React, { useState, useRef } from 'react';
import './App.css';

const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !editMode) {
      event.preventDefault();
      if (inputValue.trim() !== '') {
        setMessages((prevMessages) => [...prevMessages, inputValue]);
        setInputValue('');
      }
    } else if (event.key === 'Enter' && editMode) {
      event.preventDefault();
      if (inputValue.trim() === '') {
        const newMessages = [...messages];
        newMessages.splice(editIndex, 1);
        setMessages(newMessages);
        setEditMode(false);
      } else {
        const newMessages = [...messages];
        newMessages[editIndex] = inputValue;
        setMessages(newMessages);
        setInputValue('');
        setEditMode(false);
      }

    }
  };

  const handleDeleteLine = () => {
    setMessages((prevMessages) => prevMessages.slice(0, -1));
  };

  const handleEditLine = (event) => {
    const message = event.target.innerText;
    setInputValue(message);
    setEditMode(true);
    setEditIndex(messages.indexOf(message));
    inputRef.current.focus();
  };

  return (
    <div className="input-container">
      <div className="input-row">
        <input
          type="text"
          ref={inputRef}
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
      <ul className="input-display">
        {messages.map((message, index) => (
          <li onClick={handleEditLine} key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <h1>TA6 TA7 Y TA8</h1>
      <h2>Para editar un elemento, hacer click sobre él.</h2>
      <Input />
    </div>
  );
};

export default App;
