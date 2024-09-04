import React, { useState } from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const { login } = useAuth();
const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await login(email, password);
    navigate('/');
  } catch (error) {
    console.error('Login error:', error);
  }
};

return (
  

    
      Login
    
    

       setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
       setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      
        Login
      
    
  

);
};

export default Login;