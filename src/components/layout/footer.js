import React from 'react'
import {Navbar,Nav, Button, Card, Collapse } from "react-bootstrap"
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
const footer = () => {
  return (
    <footer className="bg-light p-4 d-flex ">
   <h4 className="lead text-secondaryjustify-content-center "> Site Des étudiants Universitaire 2023</h4>
   <Navbar className="NNNNlink" >
   <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='ml-auto'>
          
        <Nav.Link className="NNNlink" href="/blog"> Suivez nous  </Nav.Link>
        <Nav.Link  href='https://m.facebook.com/Job-Étudiant-100397359289560/' target='_blank'>   <FaFacebookSquare size="20" />   </Nav.Link>
        <Nav.Link >     < BsInstagram  size="20" /> </Nav.Link>
        <Nav.Link> <AiFillTwitterSquare  size="20" /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    </footer>
  )
}

export default footer