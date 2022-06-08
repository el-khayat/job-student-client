import React, {useState} from 'react'
import {Navbar,Nav, Button, Card, Collapse } from "react-bootstrap"
import { BsChatRightDots } from "react-icons/bs";
import { BsFillAwardFill } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import {Link} from 'react-router-dom'

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
      <Navbar.Collapse id="responsive-navbar-nav" className='navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2'>
        <Nav className='ml-auto'>
          <Link className="class nav-link" to="/posts/postprof"><BsChatRightDots  size="22" />&nbsp;&nbsp;&nbsp;Posts Professeur   </Link>
          <Link className="class nav-link" to="/posts/postetudiant"><BsChatRightDots  size="22" />&nbsp;&nbsp;&nbsp;Posts Etudiants  </Link>
        <Link className="class nav-link " to="/posts/meposts" > <BsFillAwardFill  size="22" />&nbsp;&nbsp;&nbsp;Mes Posts   </Link>
        <Link className="class nav-link " to="/posts/addpost" > <BsFillAwardFill  size="22" />&nbsp;&nbsp;&nbsp;add post   </Link>
        </Nav>
      </Navbar.Collapse>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='ml-auto'>
          <Link className="profil"   to="/profile"><BsEmojiSmile  size="22" />&nbsp;&nbsp;&nbsp;Mon Profil</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
  
  )
}
export default header;