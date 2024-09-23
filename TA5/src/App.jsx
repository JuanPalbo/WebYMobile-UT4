import { useState } from 'react'
import './App.css'

function App() {
  const [textVisible, setTextVisible] = useState(true);
  const [buttonText, setButtonText] = useState("Ocultar");

  const toggleText = () => {
    setTextVisible(!textVisible);
    setButtonText(textVisible ? "Mostrar" : "Ocultar");
  }

  return (
    <div className="app">
      <div>
        <p id="texto" style={{ display: textVisible ? "block" : "none" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque sed est veritatis a eum? Soluta repellendus repellat iure ad, maxime, modi rerum eligendi tempore magnam esse recusandae sunt inventore incidunt!
        </p>
        <button onClick={toggleText}>{buttonText}</button>
      </div>
    </div>
  )
}

export default App
