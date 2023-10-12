import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import NavBar from './NavBar';
import Home from './Home';
import Footer from './Footer';

export default function App({ allposts, user }) {
  const [posts, setPosts] = useState(allposts);

  const handlerOnDelete = async (id) => {
    const response = await axios.delete(`/api/post/${id}`);
    if (response.status === 200) {
      setPosts((prev) => prev.filter((el) => el.id !== id));
    }
  };
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home user={user} handlerOnDelete={handlerOnDelete} posts={posts} />}
        />
      </Routes>
      <Footer />
    </>
  );
}
