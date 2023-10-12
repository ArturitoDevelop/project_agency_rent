import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from './Auth';
import SiginPage from './SigninPage';
import useUser from '../customHooks/useUser';

export default function App({ user }) {
  const { currentUser, signInHandler, signUpHandler, logoutHandler } = useUser(user);

  return (
    <Routes>
      <Route path="/authPage" element={<Auth signUpHandler={signUpHandler} />} />
      <Route path="/loginPage" element={<SiginPage signInHandler={signInHandler}/>} />
    </Routes>
  );
}
