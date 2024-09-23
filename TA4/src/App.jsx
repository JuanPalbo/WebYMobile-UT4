import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  
  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    document.title = `Contador: ${counter}`;
  }, [counter]);

  return (
    <div className="app">
      <div className="divcito">
        <button onClick={increaseCounter} className='increase'>Aumentar</button>
        <p>{counter}</p>
        <button onClick={decreaseCounter} className='decrease'>Disminuir</button>
      </div>
    </div>
  );
};

export default App;
