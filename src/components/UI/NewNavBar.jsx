import React from 'react';

export default function NewNavBar({ user }) {
  return (
    <nav className="navMenu">
      <a href="/">Home</a>
      <a href="/authPage">SignUp</a>
      <a href="/loginPage">Login</a>
      <a href="/post/add">About</a>
      {user?.isAdmin === true && (
        <a className="addpost" href="/post/add">
          Add Post
        </a>
      )}

      <div className="dot" />
    </nav>
  );
}
