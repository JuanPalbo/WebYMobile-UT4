import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación
  const navigate = useNavigate(); // Para redirigir

  const login = () => {
    setIsAuthenticated(true); // Usuario autenticado
  };

  const logout = () => {
    setIsAuthenticated(false); // Usuario no autenticado
    navigate('/'); // Redirigir al home después de cerrar sesión
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
