import React from 'react';
import Account from '../components/Account';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const User = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  if (!isAuthenticated) {
    // Mettre une page 404 plutôt qu'un redirect
    return <Link to="/Sign-In">Login</Link>;
  }

  return (
    <main className='main bg-dark'>
      <div className='header'>
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className='edit-button'>Edit Name</button>
      </div>
      <h2 className='sr-only'>Accounts</h2>
      <Account />
      <Account />
      <Account />
    </main>
  );
};

export default User;

