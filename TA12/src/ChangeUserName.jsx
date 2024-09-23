import React, { useContext } from 'react';
import UserContext from './UserContext';

const ChangeUserName = () => {
  const { setUserName } = useContext(UserContext);

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Escribe tu nombre"
        onChange={handleChange}
      />
    </div>
  );
};

export default ChangeUserName;
