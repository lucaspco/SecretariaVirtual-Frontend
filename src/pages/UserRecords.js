import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import '../App.css';

const UserRecords = () => {
  const [records, setRecords] = useState([]);
  const navigate = useNavigate(); // Hook do react-router-dom para navegar

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await api.get('/prontuarios/me');
        // Verificar se response.data é uma matriz antes de definir os registros
        if (Array.isArray(response.data)) {
          setRecords(response.data);
        } else {
          console.error('API response is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching records data', error);
      }
    };

    fetchRecords();
  }, []);

  return (
    <div className="container">
      <h2>Prontuários</h2><div className='form'>
      {Array.isArray(records) && records.length > 0 ? (
        <ul>
          {records.map(record => (
            <li key={record.id}>{record.prontuario}</li>
          ))}
        </ul>
      ) : (
        <p>No records found.</p>
      )}
      <button className="button" onClick={() => navigate(-1)}>Voltar</button> {/* Botão Voltar */}
      </div>
    </div>
  );
};

export default UserRecords;
