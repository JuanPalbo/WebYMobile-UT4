import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ProductPage from './ProductPage';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute'; 
import './App.css';

const App = () => {
  return (
    <Router>
      <AuthProvider> 
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route
            path="/protected/product/:id"
            element={
              <ProtectedRoute>
                <ProductPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
