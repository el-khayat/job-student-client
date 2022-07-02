import React from "react";
import NavBar from "../components/navBar/navbar";
import img from "../assets/binomee.jpg";
import Header from "../components/blog/header";
import Descrip from "../componentshome/description/Description";
// import Appercu from "../componentshome/appercu/Appercu";
import Appercu from "../components/apercu/apercu";
import Avis from "../componentshome/avis/Avis";
import Footer from "../componentshome/footer/Footer";
import ApercuTitre from "../components/apercuTitre/ApercuTitre";
// import Slider from "../components/blog/slider";
import "./home.scss";

const Home = () => {
  return (
    <>
      <NavBar />
      <Header />

      <div>
        <Descrip />
      </div>

      <div className="sections">
        <Avis />
        <div className="titre-aprc">
          <ApercuTitre />
        </div>
        <div className="cont-aper">
          <Appercu
            image=""
            name="aya el alami"
            matier="francais"
            ville="casablanca"
            description="j'offre des cours de soutien en francais. Bienvenue."
            ecole="faculté de lettre Martil"
          />
          <Appercu
            image={img}
            name="mohamed elkhayat"
            matier="mathematique"
            ville="chefchaouen"
            description="Je suis un enseignant qui fait des cours supplémentaires de mathématiques à domicile(primaire et collège)"
            ecole="ENSA Tetouan"
          />
          <Appercu
            image=""
            name="nazik es-safi"
            matier="mathématiques"
            ville="fes"
            description="j'offre des cours de soutien en mathématiques et phisique. Bienvenue."
            ecole="faculté de science Tetouan"
          />
          <Appercu
            image=""
            name="ahmed el baqqali"
            matier="العربية "
            ville="tanger"
            description="قديم حصص الدعم لجميع مستويات الإبتدائي في جميع المواد مراجعة للامتحان الموحد  السادس"
            ecole="faculté de lettre Martil"
          />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
