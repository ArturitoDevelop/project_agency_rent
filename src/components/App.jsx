import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Auth from './Auth';
import SiginPage from './SigninPage';
import useUser from '../customHooks/useUser';
import Home from './Home';
import Footer from './Footer';
import NewNavBar from './UI/NewNavBar';

export default function App({ allposts, user }) {
  const { currentUser, signInHandler, signUpHandler, logoutHandler } = useUser(user);

  const [posts, setPosts] = useState(allposts);

  const handlerOnDelete = async (id) => {
    const response = await axios.delete(`/api/post/${id}`);
    if (response.status === 200) {
      setPosts((prev) => prev.filter((el) => el.id !== id));
    }
  };
  return (
    <>
    <NewNavBar/>
      <Routes>
        <Route path="/authPage" element={<Auth signUpHandler={signUpHandler} />} />
        <Route path="/loginPage" element={<SiginPage signInHandler={signInHandler} />} />
        <Route path="/" element={<Home user={user} handlerOnDelete={handlerOnDelete} posts={posts} />}
        />
      </Routes>
      <Footer />
    </>
  );
}
