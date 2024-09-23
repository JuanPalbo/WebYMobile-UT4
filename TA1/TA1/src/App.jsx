import React from 'react';
import './App.css';

const Card = ({ title, titleColor, description, assignedPerson, startDate, endDate }) => {
  const titleStyle = {
    color: titleColor
  };
  
  return (
    <div className="card">
       <h2 className="card-title" style={titleStyle}>{title}</h2>
      <p className="card-description">{description}</p>
      <p className="card-assigned">Asignado a: {assignedPerson}</p>
      <p className="card-date">Fecha de inicio: {startDate}</p>
      <p className="card-date">Fecha de fin: {endDate}</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Card
        title="Proyecto 1"
        titleColor="red"
        description="Este es el primer proyecto que se debe completar."
        assignedPerson="Hugo"
        startDate="01/09/2024"
        endDate="15/09/2024"
      />
      <Card
        title="Proyecto 2"
        titleColor="blue"
        description="Este es el segundo proyecto que se debe completar."
        assignedPerson="Luis"
        startDate="05/09/2024"
        endDate="20/09/2024"
      />
      <Card
        title="Proyecto 3"
        titleColor="green"
        description="Este es el tercer proyecto que se debe completar."
        assignedPerson="Paco"
        startDate="10/09/2024"
        endDate="25/09/2024"
      />
    </div>
  );
};

export default App;
