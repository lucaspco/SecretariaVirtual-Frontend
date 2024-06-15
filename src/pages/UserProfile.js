import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import '../App.css';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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

  const handleBack = () => {
    navigate(-1);
  }

  const handleUpdateAppointments = () => {
    navigate('/profile/update')
  }

  return (
    <div className="container">
      <h2>Dados Cadastrais</h2>
      <div className="form">
        {user && (
          <div >
           <p className='li'>Nome: {user.nome}</p>
           <p className='li'>Email: {user.email}</p>
           <p className='li'>Endereço: {user.endereco}</p>
           <p className='li'>Telefone: {user.telefone}</p>
           <p className='li'>Nome do Responsável: {user.nomeResponsavel}</p>
           <p className='li'>Telefone do Responsável: {user.telefoneResponsavel}</p>
          </div>
        )}
         <button className="button" onClick={handleUpdateAppointments}>Atualizar Cadastro</button>
          <button className="button" onClick={handleBack}>Voltar</button>
        </div>
    </div>
  );
};

export default UserProfile;
