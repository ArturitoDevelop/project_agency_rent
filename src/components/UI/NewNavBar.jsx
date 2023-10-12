import React from 'react';

export default function NewNavBar({ currentUser, logoutHandler }) {
  return (
    <nav className="navMenu">
      {currentUser ? (
        <>
          <a href="/">Home</a>
          <a href='/' onClick={(e)=>logoutHandler(e)}>
            Logout
          </a>
          <a href="/favorites">Favorites</a>
        </>
      ) : (
        <>
          <a href="/">Home</a>
          <a href="/authPage">SignUp</a>
          <a href="/loginPage">Login</a>
        </>
      )}
      <div className="dot" />
    </nav>
  );
}
