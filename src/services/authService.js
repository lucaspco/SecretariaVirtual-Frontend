import api from './api';

const authService = {
  login: async (username, password) => {
    try {
      const response = await api.post('/login', { username, password });
      localStorage.setItem('token', response.data.jwt);
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      }
      throw error;
    }
  },
  logout: () => {
    localStorage.removeItem('token');
  },
  getToken: () => {
    return localStorage.getItem('token');
  }
};

export default authService;
