// import {  Logout } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Link,NavLink, useNavigate } from "react-router-dom";
// import logoProfile from "../../pages/noAvatar.jpg";
// import profileImg from "../../assets/logo-job-students2.png";

import "./navBar.css";

const NavBar = () => {
  // const [reversBgLogo, setReversBgLogo] = useState(false);
  const user1 = JSON.parse(sessionStorage.getItem("user"));
  console.log("from navbar ", user1);
  
  const navB = document.querySelector("#navBar");
  window.addEventListener("scroll", fixNav);

  function fixNav() {
    if (window.scrollY > navB.offsetHeight + 150) {
      navB.classList.add("active");
    } else {
      navB.classList.remove("active");
    }
  }

  // const [user,setUser] = useState(false);

  // setUser(Boolean(sessionStorage.getItem("userId")));
  // const styleA = {
  //     color: "#3fefae",
  //     borderBottom: "2px solid #cce542"
  //   }
  
  const user = Boolean(sessionStorage.getItem("userId"));
  const navigate = useNavigate();

  const onLogin = () => {
    return (
      <>
        <li className="nav-item">
          <NavLink 
          className="nav-link" 
          style={({isActive})=> {
             return {
               color: isActive ? "#3fefae": "" ,
               borderBottom: isActive ? "2px solid #cce542":""
                };
                }} 
          to="/posts/postprof">
            <div
              data-bs-toggle="collapse"
              data-bs-target="#main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Postes Prof{" "}
            </div>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link"
          
          style={({isActive})=> {
            return {
              color: isActive ? "#3fefae": "" ,
              borderBottom: isActive ? "2px solid #cce542":""
               };
               }} 
          to="/posts/postetudiant">
            <div
              data-bs-toggle="collapse"
              data-bs-target="#main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Postes Etudiant{" "}
            </div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"
          
          style={({isActive})=> {
            return {
              color: isActive ? "#3fefae": "" ,
              borderBottom: isActive ? "2px solid #cce542":""
               };
               }} 
          to="/posts/mesposts">
            <div
              data-bs-toggle="collapse"
              data-bs-target="#main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Mes Postes{" "}
            </div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"
                    style={({isActive})=> {
                      return {
                        color: isActive ? "#3fefae": "" ,
                        borderBottom: isActive ? "2px solid #cce542":""
                         };
                         }} 
           to="/posts/addpost">
            <div
              data-bs-toggle="collapse"
              data-bs-target="#main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Poster
            </div>
          </NavLink>
        </li>

        <li className="nav-item dropdown">
          <div
            className="nav-link  dropdown-toggle"
            to="#"
            data-bs-toggle="dropdown"
          >
            <img
              // src="../../pages/noAvatar.jpg"
              // src={logoProfile}
              src={`http://localhost:9999/images/${user1.Image}`}
              className="img-user"
              alt=""
            />
          </div>
          <ul id="sub-munu" className="dropdown-menu dropdown-menu-end">
            <li>
              <button
                className="dropdown-item item-sub"
                onClick={() => {
                  navigate("/profile");
                }}
              >
                {" "}
                profile
              </button>
            </li>
            <hr id="hr" />
            <li>
              <button className="dropdown-item item-sub" onClick={logout}>
                {" "}
                Déconnecter {" "}
              </button>
            </li>
          </ul>
        </li>
      </>
    );
  };

  const notLogin = () => {
    return (
      <>
        <li className="nav-item">
          <NavLink className="nav-link" 
                    style={({isActive})=> {
                      return {
                        color: isActive ? "#3fefae": "" ,
                        borderBottom: isActive ? "2px solid #cce542":""
                         };
                         }} 
          to="/singin">
            {" "}
            Se connecter
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"
                    style={({isActive})=> {
                      return {
                        color: isActive ? "#3fefae": "" ,
                        borderBottom: isActive ? "2px solid #cce542":""
                         };
                         }} 
          to="/singup">
            S'inscrire
          </NavLink>
        </li>
      </>
    );
  };

  const logout = () => {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("user");
    console.log("loged out");

    navigate("/singin");
  };

  return (
    <>
      <nav
        id="navBar"
        className="fixed-top  navbar navbar-expand-lg navB navbar-dark "
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="https://www.inforjeuneshuy.be/wp-content/uploads/2019/02/job-%C3%A9tudiant1-1024x211.png"
              // src={reversBgLogo? logo2:logo}
              width="170"
              height="38"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav">
              {/* 
              <li className="nav-item active">
                {" "}
                <a className="nav-link" href="#">
                  Home{" "}
                </a>{" "}
              </li> */}
            </ul>
            <ul className="navbar-nav ms-auto">
              {user ? onLogin() : notLogin()}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
