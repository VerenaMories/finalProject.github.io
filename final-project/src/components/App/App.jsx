import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import People from "../People/People";
import About from "../About/About";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Notfound from "../Notfound/Notfound";
import Register from "../Register/Register";
import Login from "./../Login/Login";
import Tvshows from "./../Tvshows/Tvshows";
import Network from "./../Network/Network";
import { useState } from "react";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { MediaContextProvider } from "../../MediaContext";
import Movies from "./../Movies/Movies";

function App() {
  const [userData, setUserData] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      getUserData();
    }
  }, []);

  function getUserData() {
    let decodedToken = jwtDecode(localStorage.getItem("userToken"));
    setUserData(decodedToken);
  }

  function logOut() {
    localStorage.removeItem("userToken");
    setUserData(null);
    navigate("/login");
  }

  function ProtectedRoute({ children }) {
    if (!localStorage.getItem("userToken")) {
      return <Navigate to="/login" />;
    } else {
      return children;
    }
  }

  return (
    <>
      <Navbar userData={userData} logOut={logOut} />

      <div className="container">
        <MediaContextProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="movies"
              element={
                <ProtectedRoute>
                  <Movies />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="people" element={
               <ProtectedRoute>
            <People />
            </ProtectedRoute>
            }></Route>
            <Route path="tvshows" element={
            <ProtectedRoute>
            <Tvshows />
            </ProtectedRoute>
            }>

            </Route>
            <Route path="about" element={
            <ProtectedRoute>
            <About />
            </ProtectedRoute>
          }></Route>

            <Route path="network" element={
             <ProtectedRoute>
            <Network />
            </ProtectedRoute>
            }></Route>
            <Route path="register" element={
           
            <Register />
        
            }></Route>
            <Route
              path="login"
              element={<Login getUserData={getUserData} />}
            ></Route>

            <Route path="*" element={<Notfound />}></Route>
          </Routes>
        </MediaContextProvider>
      </div>
    </>
  );
}

export default App;
