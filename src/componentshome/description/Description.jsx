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
        
          <p className='descreption'>Job-Student est une application web  propose de mettre les étudiants universitaires  en relation avec des élèves recherchant un prof de soutien  " de sorte que facilite la tâche de trouver des professeurs compétents   ainsi que  les étudiants universitaires peuvent trouver un travail comme prof particulier qui lui permettra de sélectionner les élèves en fonction du lieu géographique afin d'être pas trop loin de chez d’eux, Donner une première expérience sur son  CV et aussi gagner de l'argent en réalisant une activité peu contraignante . Ils peuvent  communiquer entre eux en utilisant les numéros de téléphone.</p>
        </div>
        
      </div>
      
      
      
      </div>
  )
}
