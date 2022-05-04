import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import "./Navigation.css";
import { signOut } from "firebase/auth";
import Loading from "../Loading/Loading";

const Navigation = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
   
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top">
      <Container>
       <Link to="/" className="text-decoration-none"><Navbar.Brand  className="fw-bold">
          {" "}
          <span className="text-danger">Auto</span> Xpress
        </Navbar.Brand></Link> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "link")}
            >
              Home
            </NavLink>

            {user ? (
              <>
                {" "}
                <NavLink
                  to="/manageInventories"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                >
                  Manage Items
                </NavLink>{" "}
                <NavLink
                  to="/addItems"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                >
                  Add Items
                </NavLink>{" "}
                <NavLink
                  to="/myItems"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                >
                  My Items
                </NavLink>{" "}
              </>
            ) : null}
            <NavLink
              to="/blogs"
              className={({ isActive }) => (isActive ? "active-link" : "link")}
            >
              Blogs
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-link" : "link")}
            >
              About
            </NavLink>
          </Nav>
          <Nav>
            {user ? (
              <>
                <span className="text-warning fw-bold mt-2 me-3 mb-2">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="userImg"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                      }}
                    />
                  ) : null}
                  &nbsp; &nbsp;
                  {user?.displayName}
                </span>
             
                <Button onClick={logout} variant="outline-light">
                  Logout
                </Button>
              </>
            ) : (
              <span>
                {" "}
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                >
                  <Button variant="outline-light">Login</Button>
                </NavLink>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                >
                  <Button variant="outline-light">Register</Button>
                </NavLink>
              </span>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
