import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate('/');
  };

  return (
    <div className="container">
      
      Bem-vindo ao <strong>Consultório de Psicologia Fernanda Witkowski</strong> Estamos felizes em tê-lo aqui.
      <div className="form">
      <button className="button" onClick={() => navigate('/login')}>Login</button>
      <button className="button" onClick={() => navigate('/register')}>Registrar</button>
      </div>
    </div>
  );
};

export default Home;