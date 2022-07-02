import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./poster.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

const Addposte = () => {
  const navigate = useNavigate();

  const [titre, setTitre] = useState("");
  const [commentaire, setCommentaire] = useState("");

  const userId = sessionStorage.getItem("userId");

  const handleSubmitE = (e) => {
    e.preventDefault();
    if (!titre || !commentaire) {
      // toast.error("S'ils vous plait remplir les champs");

      toast.success("🦄 Wow so easy!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        animation: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      axios
        .post("http://localhost:9999/post", {
          titre,
          commentaire,
          userId,
        })
        .then((res) => {
          toast.success("🦄 Wow so easy!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            animation: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          // toast.success("Poste bien ajouter");
          setTimeout(() => navigate("/posts/mesposts"), 500);
          return res;
        })
        .catch((err) => toast.error(" erreur en ajouter poste "));
    }
  };
  const handleSubmitP = (e) => {
    e.preventDefault();
    if (!titre || !commentaire) {
      toast.error("S'ils vous plait remplir les champs");
    } else {
      axios
        .post("http://localhost:9999/PostProf", {
          titre,
          commentaire,
          userId,
        })
        .then((res) => {
          toast.success("Poste bien ajouter");
          setTimeout(() => navigate("/posts/mesposts"), 500);
          return res;
        })
        .catch((err) => toast.error("a"));
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <ToastContainer />
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
          background : "#26acd4"
        }}
      >
        <label htmlFor="titre">Titre</label>
        <input
          type="textarea"
          id="titre"
          name="titre"
          placeholder="Ex: Professeur de math"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
        >

        </input>
        <br/>
        <label htmlFor="commentaire">commentaire</label>
        <input
          type="textarea"
          styte={{background:"#4f8983"}}
          id="commentaire"
          name="commentaire"
          value={commentaire}
          onChange={(e) => setCommentaire(e.target.value)}
        />

        <input
          type="submit"
          styte={{background:"#4f8983"}}
          value="poster comme professeur"
          onClick={handleSubmitP}
        />
        <input
          type="submit"
          value="poster comme etudiant"
          onClick={handleSubmitE}
        />
      </form>
    </div>
  );
};

export default Addposte;
