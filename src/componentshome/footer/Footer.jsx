import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import {Navbar,Nav, Button, Card, Collapse } from "react-bootstrap"
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <div className='footer' id="footer">
    <footer>
    <Box px={{ xs: 3, sm: 10}}
         py={{ xs: 5, sm: 10}}
    bgcolor="text.secondary"
     color="white">
        <Container maxWidth="lg">
          <Grid container style={{justifyContent: "space-between"}} spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} color="rosybrown" > A propos de nous</Box>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Box>
                Énoncé ou déclaration aux termes desquels un symbole
                 ou une combinaison de symboles nouvellement introduits
                  (definiendum) signifie ou dénote la même chose qu'un 
                  symbole dont le sens est déjà connu (definiens).
                </Box>

            </Grid>
            {/* <Grid item xs={12} sm={4}>
              <Box borderBottom={1} color="rosybrown">  Compte</Box>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Box>
                  <Link  href="/" color="inherit">
                  Se connecter 
                  </Link>
                </Box>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Box>
                  <Link  href="/" color="inherit">
                  S'inscrire
                  </Link>
                </Box>

              

            </Grid> */}
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} color="rosybrown"> Suivez-nous</Box>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Box>
                  <Link href="/" color="inherit">
                    Facebook 
                  </Link >
                  <Nav.Link color="inherit" href='https://m.facebook.com/Job-Étudiant-100397359289560/' target='_blank'>   <FaFacebookSquare size="20" />   </Nav.Link>
        
                </Box>
                <Box>
                  <Link  href="/" color="inherit">
                  Instagram
                  </Link>
                  
        <Nav.Link color="inherit"> < BsInstagram  size="20" /> </Nav.Link>
        
                </Box>
                <Box>
                  <Link  href="/" color="inherit">

                  Twitter 
                  </Link>
                  
                   <Nav.Link color="inherit"> <AiFillTwitterSquare  size="20" /></Nav.Link>
                </Box>

              

            </Grid>




          </Grid>
          <Box  textAlign="center" pt={{ xs: 5, sm: 10}} pb={{xs: 5, sm:0}}> 
             Site universitaire &reg; { new Date().getFullYear()}
          </Box>


        </Container>









    </Box>
    
    </footer>
    </div>
  )
}