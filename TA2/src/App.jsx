import React from 'react';
import './App.css'; 

const Card = ({ titleColor, children }) => {
  return (
    <div className="card">
      <div style={{ color: titleColor }}>{children}</div> 
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Card titleColor="red">
        <h2 className="card-title">Proyecto 1</h2>
        <p className="card-description">Este es el primer proyecto que se debe completar.</p>
        <p className="card-assigned">Asignado a: Hugo</p>
        <p className="card-date">Fecha de inicio: 01/09/2024</p>
        <p className="card-date">Fecha de fin: 15/09/2024</p>
      </Card>
      <Card titleColor="blue">
        <h2 className="card-title">Proyecto 2</h2>
        <p className="card-description">Este es el segundo proyecto que se debe completar.</p>
        <p className="card-assigned">Asignado a: Paco</p>
        <p className="card-date">Fecha de inicio: 05/09/2024</p>
        <p className="card-date">Fecha de fin: 20/09/2024</p>
      </Card>
      <Card titleColor="green">
        <h2 className="card-title">Proyecto 3</h2>
        <p className="card-description">Este es el tercer proyecto que se debe completar.</p>
        <p className="card-assigned">Asignado a: Luis</p>
        <p className="card-date">Fecha de inicio: 10/09/2024</p>
        <p className="card-date">Fecha de fin: 25/09/2024</p>
      </Card>
    </div>
  );
};

export default App;
