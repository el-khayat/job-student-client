import React from 'react'
import './description.scss'
import Img3 from "../../assets/main.png"
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Description() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 2000,
      backSpeed:80,
      strings: ["Notre-Site", "Job-etudiant" ],
    });
  }, []);
  
  return (
      <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="https://st2.depositphotos.com/3591429/5997/i/600/depositphotos_59977559-stock-photo-hands-holding-word-about-us.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <h1 className='titree'> A propos de <span ref={textRef}></span> </h1>
        <div className="wrapper">
        
          <p className='descreption'>Sur mon blog Audrey Tips, le menu principal est celui qui affiche les liens :
            Commencer ici pour guider vers la page qui vous explique le pourquoi de ce blog,
              Blog pour retourner à la page principale,naziknnjccjdzjbdcbvehvcvecvehvcudvc uv
             Contacter Audrey qui renvoie vers le formulaire de contact.
         Je ferai certainement évoluer le menu prochainement pour y ajouter d’autresSur mon blog Audrey Tips, le menu principal est celui qui affiche les liens :
            Commencer ici pour guider vers la page qui vous explique le pourquoi de ce blog,
              Blog pour retourner à la page principale,naziknnjccjdzjbdcbvehvcvecvehvcudvc uv
             Contacter Audrey qui renvoie vers le formulaire de contact.
Je ferai certainement évoluer le menu prochainement pour y ajouter</p>
        </div>
        
      </div>
      
      
      
      </div>
  )
}
