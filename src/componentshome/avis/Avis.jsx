import React from 'react'
import './avis.scss'
export default function Avis() {
  const data = [
    {
      id: 1,
      name: "Yassine",
      title: " Etudiant au lycée",
      img:
        "https://cache.magicmaman.com/data/photo/w1000_ci/5i/soutien-scolaire.jpg",
      icon: "assets/twitter.png",
      desc:
        "je suis timide dans l'école mais avec mon prof Farida Najah je suis devenu plus ouvert",
        featured: true,
      },
    {
      id: 2,
      name: "halid ",
      title: "Etudiante au Primaire",
      img:
        "https://cache.magicmaman.com/data/photo/w1000_ci/5i/soutien-scolaire.jpg",
      icon: "assets/youtube.png",
      desc:
        "On a essayé plusieurs professeyrs mais sans resultat, grace au site on arencontré Nazik qui a su mettre ma  fille en confiance ",
      featured: true,
    },
    {
      id: 3,
      name: "Zakia",
      title: "Etudiante au Primaire",
      img:
        "https://cache.magicmaman.com/data/photo/w1000_ci/5i/soutien-scolaire.jpg",
      icon: "assets/linkedin.png",
      desc:
        "On a essayé plusieurs professeyrs mais sans resultat, grace au site on a rencontré Mohamed qui a su mettre ma fille en confiance.",
        featured: true,
      },
    {
      id: 3,
      name: "Zakia",
      title: "Etudiante au Primaire",
      img:
        "https://cache.magicmaman.com/data/photo/w1000_ci/5i/soutien-scolaire.jpg",
      icon: "assets/linkedin.png",
      desc:
        "On a essayé plusieurs professeyrs mais sans resultat, grace au site on a rencontré Mohamed qui a su mettre ma fille en confiance.",
        featured: true,
      },
  ];
  return (
    <div className="testimonialsm" id="avis">
    <h1 className='h1' >Avis des étudiants</h1>
    <div className="containerm" id='cont-avis'>
      {data.map((d) => (
        <div className={d.featured ? "card featured" : "card"}>
          <div className="top">
            <img src="assets/right-arrow.png" className="left" alt="" />
            <img
              className="user"
              src={d.img}
              alt=""
            />
            <img className="right" src={d.icon} alt="" />
          </div>
          <div className="center">
            {d.desc}
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}
