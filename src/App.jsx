import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import './App.css'


const RouterComponent = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate('/login');
    }
  }, [user]);

  return (

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <RouterComponent />
    </BrowserRouter>
  );
}

export default App;
