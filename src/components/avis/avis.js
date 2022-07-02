import React, { useState ,useEffect} from 'react'
import "./avis.css"
import Avi from "../avi/avi"
import axios from 'axios'

import {Container,Row,Col} from 'react-bootstrap'
const Avis = ({profileId,render}) => {

  // states 
  const [avis,setAvis]=useState([]);
  const [avisLoading,setAvisLoading]=useState(true);

  
  // hooks
  useEffect( () =>{
    getAvis();
 }, [profileId,render]);


// functions 
  const  getAvis = async () =>{
   const host = 'localhost'
    axios.get(`http://${host}:9999/avi/${profileId}`)
    .then(res => res.data)
    .then( (avisR) =>{
      setAvis(avisR)
       setAvisLoading(false)
      })
  }
  
  return (
<Container id='container-card'>
  <Row>
  {
                      !avisLoading ? (

                         avis.length < 1 ? (<p> Aucune avis </p>) :
                         avis.map((avi, index ) => (    <Col key={avi.id}> <Avi text={avi.avi} nom={avi.user.Nom} prenom={avi.user.Prenom} Image={avi.user.Image}/> </Col> )
                      ))
                      : null
                      // <ContentPlaceHolder/> 
                     }

  </Row>

</Container>
  )
}

export default Avis ;
