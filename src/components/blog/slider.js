import React, {useEffect} from 'react'
import {Card, Button, CardGroup } from 'react-bootstrap'
import Img1 from  "../../assets/binomee.jpg"
import Img2 from  "../../assets/nazii.jpg"

import gsap from "gsap";
import { BsGraphDown } from 'react-icons/bs';
const Slider = () => {

      useEffect(() =>{
           
        const divs = document.querySelectorAll(".testimonials")
        gsap.set(divs[1], {x:50, opacity:1});

        gsap
        .timeline({repeat:-1, defaults:{duration:3}})
         .add("one")
         .to(divs[0], {y:300, x:0, opacity:0.05}, "one")
         .to(divs[1], {y:-150, x:0, opacity:0.05}, "one")
         .to(divs[2], {y:-200, x:0, opacity:1}, "one")
         .to(divs[3], {y:0, x:100, opacity:1}, "one")

         .add("two")
         .to(divs[0], {y:100, x:100, opacity:1}, "two")
         .to(divs[1], {y:100, x:-600, opacity:0.05}, "two")
         .to(divs[2], {y:50, x:400, opacity:0.05}, "two")
         .to(divs[3], {y:0, x:300, opacity:0.05}, "two")


         .add("three")
         .to(divs[0], {y:0, x:0, opacity:0.05}, "three")
         .to(divs[1], {y:150, x:300, opacity:1}, "three")
         .to(divs[2], {y:-50, x:0, opacity:0.05}, "three")
         .to(divs[3], {y:-50, x:0, opacity:1}, "three")


         .add("for")
         .to(divs[0], {y:0, x:0, opacity:0.05}, "for")
         .to(divs[1], {y:150, x:0, opacity:1}, "for")
         .to(divs[2], {y:150, x:100, opacity:0.05}, "for")
         .to(divs[3], {y:200, x:0, opacity:0.05}, "for")
      },
      )
  return (
    
    <div className="content">
      <div className="testimonials">
        <div className="container">
                      <div>
                         <img className="img" src="https://www.legalloromain.net/wp-content/uploads/2020/06/Jeune-Fille-Etudiante-900x579-1.jpg"/>
                      </div>
                      
          <div className="text">
                        
                         <h2> Farida Najah</h2>
                         <p>  professeur de</p>
                         <h1 className="math"> Français</h1>
                         <h4 className="lead text-secondary "> Etudiante de l'ENSA Tetouan</h4>
                        
                 
          </div>
        </div>  
      </div>
      <div className="testimonials">
        <div className="container">
                      <div>
                         <img className="img" src="https://thumbs.dreamstime.com/b/%C3%A9tudiant-universitaire-masculin-noir-52810169.jpg"/>
                      </div>
                      
          <div className="text">
                        
                         <h2> Brahim Meskour</h2>
                         <p>  professeur de</p>
                         <h1 className="math"> Phylosophy</h1>
                         <h4 className="lead text-secondary "> Etudiante de la faculté des lettres</h4>
                        
                 
          </div>
        </div>  
      </div>

      <div className="testimonials">
        <div className="container">
                      <div>
                         <img className="img" src={Img1}/>
                      </div>
                     
          <div className="text">
                        
                       <h2> Mohamed EL-Khayat</h2>
                         <p>  professeur de</p>
                         <h1 className="math"> Mathématiques</h1>
                         <h4 className="lead text-secondary "> Etudiante de la Faculté des Scinces Tétouan</h4>
                       
          </div>
        </div>  
      </div>


      <div className="testimonials">
        <div className="container">
                      <div>
                         <img className="img" src={Img2}/>
                      </div>
                      
          <div className="text">
                           <h2>Fatima Es-safi</h2>
                         <p>  professeur de</p>
                         <h1 className="math"> Physique</h1>
                         <h4 className="lead text-secondary "> Etudiante de la Faculté des Scinces Tétouan</h4>
                         &nbsp;&nbsp;&nbsp;
          </div>
        </div>  
      </div>


    </div>

  );
}
export default Slider
 