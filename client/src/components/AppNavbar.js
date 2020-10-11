import React, { Fragment } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useSelector, useDispatch } from "react-redux";

import Register from "./auth/Register";
import Login from "./auth/Login";
import { Link } from "react-router-dom";
import { logout } from "../js/actions/authActions";

const AppNavbar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  return (
    <Navbar className="d-flex justify-content-between" color="dark" dark>
      <NavbarBrand
        tag={() => (
          <Link
            style={{ textDecoration: "none", color: "white", fontSize: "25px" }}
            to="/"
          >
            CoinElectro
          </Link>
        )}
      />
      <Nav className="text-white">
        {isAuth ? (
          <Fragment>
            <NavItem className="p-2">
              <Button onClick={()=>dispatch(logout())} color="light">
                Logout
              </Button>
            </NavItem>
            <NavItem className="p-2">
              <Button color="light">
                <Link to="/profil">Profil</Link>
              </Button>
            </NavItem>
            <NavItem className="p-2">
              <Button color="light">
                <Link to="/goToCart"><AiOutlineShoppingCart />Go To Cart</Link>
              </Button>
            </NavItem>
          </Fragment>
        ) : (
          <Fragment>
            <NavItem className="p-2">
              <Login />
            </NavItem>
            <NavItem className="p-2">
              <Register />
            </NavItem>
          </Fragment>
        )}
      </Nav>
    </Navbar>
  );
};

export default AppNavbar;