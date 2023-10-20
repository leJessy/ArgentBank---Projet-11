import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Header() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({
      type: 'LOGOUT_USER',
    });
  }

  return (
    <nav className='main-nav'>
      <Link className='main-nav-logo' to='./'>
        <img
          className='main-nav-logo-image'
          src='argentBankLogo.webp'
          alt='Logo Argent Bank'
        />
        <h1 className='sr-only'>Argent Bank</h1>
      </Link>
      <div>
        {isAuthenticated ? (
          <>
          <Link className='main-nav-item' to='./User'>
            <i className='fa fa-user-circle'></i>
            &nbsp;{username}
          </Link>
          <Link className='main-nav-item' to='/' onClick={handleLogout}>
          <i className='fa-solid fa-right-from-bracket'></i>
            &nbsp;Logout
          </Link>
        </>
        ) : (
          <Link className='main-nav-item' to='./Sign-In'>
            <i className='fa fa-user-circle'></i>
            &nbsp;Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;