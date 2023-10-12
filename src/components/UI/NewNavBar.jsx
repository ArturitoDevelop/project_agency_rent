import React from 'react';

export default function NewNavBar() {
  return (
    <nav className="navMenu">
    <a href="/">Home</a>
    <a href="/authPage">SignUp</a>
    <a href="/loginPage">Login</a>
    <a href="#">About</a>
    <div className="dot" />
  </nav>
  )
}
