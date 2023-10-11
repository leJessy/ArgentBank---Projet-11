import React from 'react'
import { Link } from "react-router-dom"

function Header() {
  return (

        <nav className='main-nav'>
            <Link
              className='main-nav-logo'
              to="./">
                <img 
                  className='main-nav-logo-image'
                  src="argentBankLogo.webp" 
                  alt="Logo Argent Bank" />
                <h1 className='sr-only'>Argent Bank</h1>
            </Link>
            <div>
              <Link
                className='main-nav-item'
                to="./Sign-In">
                <i className="fa fa-user-circle"></i>
                &nbsp;Sign In
              </Link>
            </div>

        </nav>
  )
}

export default Header