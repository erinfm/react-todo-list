import React from 'react';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>
        Todo List
      </h1>
    </header>
  )
}

const headerStyle = {
  background: '#718093',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
}

export default Header;