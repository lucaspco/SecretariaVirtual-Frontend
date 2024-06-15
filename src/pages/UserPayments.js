import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import '../App.css';

const UserPayments = () => {
  const [payments, setPayments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await api.get('/pagamentos/me');
        setPayments(response.data);
      } catch (error) {
        console.error('Error fetching payments data', error);
      }
    };

    fetchPayments();
  }, []);

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <div className="container">
      <h2>Pagamentos</h2>
      <div className='form'>
        <ul>
          {payments.map(payment => (
            <li key={payment.id}>{payment.metodoPagamento} - R${payment.valor.toFixed(2)} - {payment.dataPagamento}</li>
          ))}
        </ul>
        <button className="button" onClick={handleBack}>Voltar</button> {/* Botão de voltar */}
      </div>
    </div>
  );
};

export default UserPayments;
