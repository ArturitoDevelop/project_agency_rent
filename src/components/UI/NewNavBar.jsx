import React from 'react';

export default function NewNavBar({ currentUser, logoutHandler }) {
  return (
    <div className="containernav">
      <a href="/">
        <img className="logo" src="/img/logo.png" alt="logo" />
      </a>
      <nav className="navMenu">
        {currentUser ? (
          <>
            <a href="/">Home</a>
            <a href="/" onClick={(e) => logoutHandler(e)}>
              Logout
            </a>
            {currentUser?.isAdmin !== true && <a href="/favorites">Favorites</a>}

            {currentUser?.isAdmin === true && (
              <a className="addpost" href="/post/add">
                Add Post
              </a>
            )}
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
    </div>
  );
}
