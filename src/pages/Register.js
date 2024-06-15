import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const Register = () => {
  const [user, setUser] = useState({
    nome: '',
    endereco: '',
    email: '',
    telefone: '',
    nomeResponsavel: '',
    telefoneResponsavel: '',
    cpf: '',
    senha: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/usuarios/registro', user);
      alert('User registered successfully');
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  const handleBack = () => {
    navigate(-1); // Navega para a página anterior
    // Ou você pode navegar para uma página específica:
    // navigate('/');
  };

  return (
    <div className="container">
      <h2>Cadastro</h2>
      <form className="form" onSubmit={handleRegister}>
        <input className="input" type="text" name="nome" placeholder="Nome" value={user.nome} onChange={handleChange} />
        <input className="input" type="text" name="endereco" placeholder="Endereço" value={user.endereco} onChange={handleChange} />
        <input className="input" type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} />
        <input className="input" type="text" name="telefone" placeholder="Telefone" value={user.telefone} onChange={handleChange} />
        <input className="input" type="text" name="nomeResponsavel" placeholder="Nome do Responsável" value={user.nomeResponsavel} onChange={handleChange} />
        <input className="input" type="text" name="telefoneResponsavel" placeholder="Telefone do Responsável" value={user.telefoneResponsavel} onChange={handleChange} />
        <input className="input" type="text" name="cpf" placeholder="CPF" value={user.cpf} onChange={handleChange} />
        <input className="input" type="password" name="senha" placeholder="Senha" value={user.senha} onChange={handleChange} />
        <button className="button" type="submit">Register</button>
        <button className="button" onClick={handleBack}>Voltar</button> {/* Botão de voltar */}
      </form>
    </div>
  );
};

export default Register;
