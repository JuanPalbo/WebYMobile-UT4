import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from './AuthContext';

const HomePage = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Home</h1>
      
      {isAuthenticated ? (
        <>
          <p>Has iniciado sesión</p>
          <button onClick={logout}>Cerrar Sesión</button>
        </>
      ) : (
        <>
          <p>No has iniciado sesión</p>
          <button onClick={login}>Iniciar Sesión</button>
        </>
      )}

      <p>Haz clic en un producto para ver los detalles:</p>
      <ul>
        <li><Link to="/protected/product/1">Producto 1</Link></li>
        <li><Link to="/protected/product/2">Producto 2</Link></li>
        <li><Link to="/protected/product/3">Producto 3</Link></li>
      </ul>
    </div>
  );
};

export default HomePage;
