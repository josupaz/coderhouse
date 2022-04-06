import React from "react";
import Nav from 'react-bootstrap/Nav'
import "./styles.css";
import logo from '../../assets/images/logo.png';
import CartWidget from "../CardWidget";


const NavBar = () => {


  return (
    <>

    <div className = 'navbar-2'>
    <img src={logo} alt="img-SM" width="100" height="50" />
    <h3 className="name-empresa">empresa SM</h3>
    <CartWidget/>
    <Nav justify variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Inicio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/hombre">Hombres</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/mujer">Mujer</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/joyas">Joyas</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/electronica">Electronica</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>


    </>
  );
};

export default NavBar;
