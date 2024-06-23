import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthUser, setToken } from "../Redux/userSlice";

const Header = () => {

  //store
  const { authUser } = useSelector(store => store.user)
  const dispatch = useDispatch();
  
  const id = authUser?.id;
  // console.log(id);
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    dispatch(setAuthUser(null));
    dispatch(setToken(null));
    navigate("/login");
    // window.location.reload();
  };


  return (
    <div>
      <Navbar expand="lg" className="bg-sky-500 text-white ">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
            className="text-white font-bold"
          >
            SAAS APP
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-white">
              <NavDropdown
                title={
                  <span className="text-white font-bold">
                    menu 
                  </span>
                }
                id="basic-nav-dropdown"
              >
                {id ? (
                  <>
                    <NavDropdown.Item
                      onClick={() => {
                        navigate("/profile");
                      }}
                    >
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Log Out
                    </NavDropdown.Item>
                  </>
                ) : (
                  <>
                    <NavDropdown.Item
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      Login
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={() => {
                        navigate("/register");
                      }}
                    >
                      Register
                    </NavDropdown.Item>
                  </>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
