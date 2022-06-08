import React, {useState} from 'react'
import {Navbar,Nav, Button, Card, Collapse } from "react-bootstrap"
import  { NavLink } from "react-router-dom"
import { Link } from 'react-router-dom'


const header = () => {
  
  return (
    
    <div>
      <Navbar fixed='top' collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Link to="/">
        <img
          src="https://www.inforjeuneshuy.be/wp-content/uploads/2019/02/job-%C3%A9tudiant1-1024x211.png"
          width="170"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />        
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='ml-auto'>
          <Link className="Nlink nav-link" to="/singin"> Se connecter   </Link>&nbsp;&nbsp;&nbsp;
          <Link className="NNlink nav-link" to="/singup">  S'insscrire   </Link>&nbsp;&nbsp;&nbsp;
       
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
  )
}
export default header;