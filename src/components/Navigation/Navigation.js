import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import "./Navigation.css";
import { signOut } from "firebase/auth";

const Navigation = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand to="#home" className="fw-bold">
          {" "}
          <span className="text-danger">Auto</span> Xpress
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "link")}
            >
              Home
            </NavLink>

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
                {" "}
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
                {console.log(user)}
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
