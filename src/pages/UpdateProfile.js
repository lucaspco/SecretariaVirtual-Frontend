import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import '../App.css';

const UpdateProfile = () => {
  const [user, setUser] = useState({
    nome: '',
    endereco: '',
    email: '',
    telefone: '',
    nomeResponsavel: '',
    telefoneResponsavel: '',
  });
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/usuarios/${user.nome}`, user); // Atualiza o usuário pelo nome
      alert('Profile updated successfully');
      navigate('/profile'); // Redireciona para a página do perfil
    } catch (error) {
      console.error('Error updating profile', error);
    }
  };

  return (
    <div className="container">
      <h2>Atualizar Cadastro</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="nome"
          placeholder="Nome"
          value={user.nome}
          onChange={handleChange}
          disabled
        />
        <input
          className="input"
          type="text"
          name="endereco"
          placeholder="Endereço"
          value={user.endereco}
          onChange={handleChange}
        />
        <input
          className="input"
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          className="input"
          type="text"
          name="telefone"
          placeholder="Telefone"
          value={user.telefone}
          onChange={handleChange}
        />
        <input
          className="input"
          type="text"
          name="nomeResponsavel"
          placeholder="Nome do Responsável"
          value={user.nomeResponsavel}
          onChange={handleChange}
        />
        <input
          className="input"
          type="text"
          name="telefoneResponsavel"
          placeholder="Telefone do Responsável"
          value={user.telefoneResponsavel}
          onChange={handleChange}
        />
        <button className="button" type="submit">Atualizar</button>
        <button className="button" onClick={() => navigate(-1)} type="button">Voltar</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
