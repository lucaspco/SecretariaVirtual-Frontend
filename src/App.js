import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import UserProfile from './pages/UserProfile';
import UserPayments from './pages/UserPayments';
import UserAppointments from './pages/UserAppointments';
import UserRecords from './pages/UserRecords';
import UpdateProfile from './pages/UpdateProfile';
import UpdateAppointments from './pages/UpdateAppointments';
import Home from './pages/Home';
import './App.css';

const App = () => {
  return (
    <div>
      <nav>
         𝚿 Consultório de Psicologia Fernanda Witkowski 𝚿
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/profile/update" element={<UpdateProfile />} />
        <Route path="/payments" element={<UserPayments />} />
        <Route path="/appointments" element={<UserAppointments />} />
        <Route path="/appointments/update" element={<UpdateAppointments />} />
        <Route path="/records" element={<UserRecords />} />
      </Routes>
      <footer>
      <p>&copy; 2024 Lucas Paiva. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
