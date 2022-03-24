import React from "react";
import Nav from 'react-bootstrap/Nav'
import "./styles.css";
import logo from '../../imgs/logo.png';
import Cart from "../CardWidgetComponent";


const NavBar = () => {


  return (
    <>

    <div className = 'navbar-2'>
    <img src={logo} width="100" height="50" />
    <h3 className="name-empresa">empresa SM</h3>
    <Cart/>
    <Nav justify variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Inicio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Vehiculos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Electronica</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4">Libros</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-5">Login</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>


    </>
  );
};

export default NavBar;
