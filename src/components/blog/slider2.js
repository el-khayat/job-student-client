
import React, {useEffect} from 'react'
import {Card, Button, CardGroup } from 'react-bootstrap'
import { AiOutlineMessage } from "react-icons/ai";



const Slider2 = () => {
  return (
    
    <div className="content">
      <div className="testimonialss1">
        <div className="container1">
       
          <div className="text">
                        
                      <h3> Zakia, Mére de Marwa </h3> 
                      <h4 className="lead text-secondary "> Etudiante au Primaire</h4>
                         <p className="avis"> "On a essayé plusieurs professeyrs mais sans resultat, grace au site on a
                              rencontré Mohamed qui a su mettre ma 
                             fille en confiance." <AiOutlineMessage size="22" />
                         </p>
          </div>
        </div>  
      </div>




      
      <div className="testimonialss2">
        <div className="container1">
                     
          <div className="text">

                        <h3> Yassine </h3> 
                      <h4 className="lead text-secondary "> Etudiant au lycée</h4>
                         <p className="avis" > "je suis timide dans l'école mais avec mon prof Farida Najah 
                         je suis devenu plus ouvert" <AiOutlineMessage  size="22" />
                         </p>   
      </div>
        </div>  
      </div>
      <div className="testimonialss3">
        <div className="container1">
                     
          <div className="text">
                        
          <h3> Zakia, Mére de Marwa </h3> 
                      <h4 className="lead text-secondary "> Etudiante au Primaire</h4>
                         <p className="avis"> "On a essayé plusieurs professeyrs mais sans resultat, grace au site on a
                              rencontré Nazik qui a su mettre ma 
                             fille en confiance" <AiOutlineMessage  size="22" />
                         </p>
          </div>
        </div>  
      </div>
     
    </div>

  );
}

export default Slider2