import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import './App.css'


const RouterComponent = () => {
  const [userEmail, setUserEmail] = useState(null);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
   async function checkSession() {
      try {
         const response = await fetch('http://localhost:3000/check-session', {
                      method: "GET",
                      credentials: 'include',
                      headers: {
                          "Content-Type": "application/json",
                      },
                  });
          const {loggedIn, status, userInfo} = await response.json();
          
          if (loggedIn && status === 200 && userInfo !== undefined) {
              setUserEmail(userInfo.email);
              setRole(userInfo.calitate);
          } else {
              setUserEmail(null);
              if (userEmail === null) {
                navigate('/login');
              }
          }
      } catch (error) {
          console.log('Fetch failed, check the reason:', error);
          setUserEmail(null);
      }
  }
    const fetchUserData = async () => await checkSession();

    fetchUserData();
  }, []);

  return (

      <Routes>
        <Route path="/" element={<Dashboard userEmail={userEmail} role={role}/>} />
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
