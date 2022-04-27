import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.module.css";


export default function Navbar({ userData, logOut }) {



  return (
    <nav className="navbar navbar-expand-lg navbar-ligh " id="mainNAv">
      <div className="container-fluid">
       
        <Link className="navbar-brand logo " to="#">
          Noxe
        </Link>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {userData && (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  { <Link className="nav-link" to="movies" >
                    Movies
                  </Link> }
                </li>
                <li className="nav-item">
                  <Link className="nav-link"  to="tvshows">
                    Tv Show
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="people">
                    People
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="about">
                    About
                  </Link>
                </li>
               
                <li className="nav-item">
                  <Link className="nav-link" to="network">
                    Networks
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <ul className="d-flex list-unstyled m-0">
          <div className="d-flex justify-content-center align-items-center">
            <input type="text" className="bg-light me-2" placeholder="Search" />
          </div>
          <div className="social d-flex align-items-center">
            <i className="fab fa-facebook fa-2x me-2"></i>
            <i className="fab fa-spotify fa-2x me-2"></i>
            <i className="fab fa-instagram fa-2x me-2"></i>
            <i className="fab fa-youtube fa-2x "></i>
          </div>

          {userData ? (
            <>
              <li className="nav-item">
                <span className="nav-link" onClick={logOut}>
                  LogOut
                </span>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item ">
                <Link className="nav-link" to="login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="register">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>

    
  );
}
