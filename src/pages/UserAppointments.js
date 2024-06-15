import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const UserAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await api.get('/agendamentos/me');
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments data', error);
      }
    };

    fetchAppointments();
  }, []);

  const handleBack = () => {
    navigate(-1); // Navega para a página anterior
    // Ou você pode navegar para uma página específica:
    // navigate('/');
  };

  return (
    <div className="container">
      <h2>Consultas</h2>
      <div className='form'>
        <ul>
          {appointments.map(appointments => (
            <li key={appointments.id}>{appointments.dataHora} - {appointments.descricao}</li>
          ))}
        </ul>
        <button className="button" onClick={() => navigate('/appointments/update')}>Agendar</button>
        <button className="button" onClick={handleBack}>Voltar</button> {/* Botão de voltar */}
      </div>
    </div>
  );
};

export default UserAppointments;
