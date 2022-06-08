import React from "react";
import Header from "../components/blog/header";
import Footer from "../componentshome/footer/Footer";
import NavBar from "../components/navBar/navbar";
import Posts from "../components/blog/postsP";
import PostsE from "../components/blog/postsE";
import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Postes = () => {
  return (
    <div>
      <NavBar />

      {/* <Header/> */}

      <Outlet />

      <Footer />
    </div>
  );
};

export default Postes;
