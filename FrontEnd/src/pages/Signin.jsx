import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage('Merci de remplir les champs email et password');
      return;
    }
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: { token: data.token },
      });

      navigate('/User');
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage('Erreur lors de la connexion, veuillez réessayer.');
    }
  };

  return (
    <main className='main bg-dark'>
      <section className='sign-in-content'>
        <i className='fa fa-user-circle sign-in-icon'></i>
        <h1>Sign In</h1>
        <form>
          <div className='input-wrapper'>
            <label htmlFor="email">Email</label>
            <input type="text" id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='input-wrapper'>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="button" className='sign-in-button' onClick={handleLogin}>
            Sign In
          </button>
        </form>
        {errorMessage && <div className='error-message'>{errorMessage}</div>}
      </section>
    </main>
  );
};

export default Signin;