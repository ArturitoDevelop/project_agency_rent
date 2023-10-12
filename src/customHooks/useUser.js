import { useState } from 'react';
import axios from 'axios';

export default function useUser(user) {
  const [currentUser, setCurrentUser] = useState(user || null);

  const signUpHandler = (e) => {
    e.preventDefault();
    const userData = Object.fromEntries(new FormData(e.target));
    if (!userData.name || !userData.password || !userData.email) return;

    axios
      .post('/api/auth/signup', userData)
      .then(() => {
        window.location = '/';
        e.target.reset();
      })
      .catch((err) => console.log(err));
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    console.log('logout');
    axios.get('/api/auth/logout').then((data) => {
      if (data.status === 200) {
        setCurrentUser(null);
      }
      window.location = '/';
    });
  };

  const signInHandler = (e) => {
    e.preventDefault();
    const userData = Object.fromEntries(new FormData(e.target));
    if (!userData.password || !userData.email) return;

    axios
      .post('/api/auth/signin', userData)
      .then(() => {
        window.location = '/';
        e.target.reset();
      })
      .catch((err) => console.log(err));
  };

  return {
    currentUser,
    signInHandler,
    signUpHandler,
    logoutHandler,
  };
}
