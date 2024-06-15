import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import api from '../services/api';
import authService from '../services/authService';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate('/');
  };

  const [user, setUser] = useState({ nome: '' });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get('/usuarios/me');
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="container">
      <h2>Olá, {user.nome}</h2>
      <div className="form">
        <button className="button" onClick={() => navigate('/profile')}>Cadastro</button>
        <button className="button" onClick={() => navigate('/payments')}>Pagamentos</button>
        <button className="button" onClick={() => navigate('/appointments')}>Consultas</button>
        <button className="button" onClick={() => navigate('/records')}>Prontuarios</button>
        <button className="button" onClick={handleLogout}>Logout</button> {/* Logout button */}
      </div>
      
    </div>
  );
};

export default Dashboard;
