import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>
        Todo List
      </h1>
      <Link style={linkStyle} to="/">Home</Link>  |  <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
  background: '#718093',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  padding: '0 0.5rem'
}

export default Header;