import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import formData from "form-data";
import {AddPhotoAlternate} from '@material-ui/icons';
import axios from "axios";
import { useState, useEffect } from "react";
import "./profile.css";
import noAvatare from "./noAvatar.jpg";
import cover from "./cover.jpg";
import InformationUser from "../components/InformationUser/InformationUser";
// import Particles from "../components/particles";
import NavBar from "../components/navBar/navbar";
import Avis from "../components/avis/avis";
// import Content from "../components/contentPlaceHolder";
import { ToastContainer, toast } from "react-toastify";

import { CircularProgress, TextField, Button } from "@material-ui/core";

const Profile = () => {
  //hooks
  const params = useParams();
  const navigate = useNavigate();

  // states
  const [user, setUser] = useState({});
  const [avi, setAvi] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [noAvatar, setNoAvatar] = useState(false);
  const [image, setImage] = useState("");
  const [src, setsrc] = useState("");
  const [mode, setMode] = useState("profile");

  // constants

  // const URL = "http://localhost:9999/images/";


  //  user
  const curentUser = sessionStorage.getItem("userId");
  const id = params.id ? params.id : curentUser;
  const isCurentUser = id === curentUser ? true : false;
  
  useEffect(() => {
    if (!Boolean(sessionStorage.getItem("userId"))) navigate("/singin");
    
    getUser();

  }, [image,id,src]);

  const getUser = async () => {
    axios.get(`http://localhost:9999/user/${id}`)
   .then(res =>{
     setUser(res.data[0]);
     setsrc(`http://localhost:9999/images/${res.data[0].Image}`);
     res.data[0].Image== undefined ? setNoAvatar(true) : setNoAvatar(false) ;
     if(isCurentUser) sessionStorage.setItem("user", JSON.stringify(res.data[0]));


   })
 };


  const changeProfileHandler = async (e) => {

    const file = e.target.files[0];

         setImage(file)
         e.preventDefault();
    
    let data = new formData();
    data.append("image", file);

    let config = {
      header: {
        "Content-Type": "multipart/form-data",
      }
    };


    axios
    .patch(`http://localhost:9999/user/${curentUser}`, data, config)
    .then((res) => {
      console.log("returned data from axios ",res.data);
      setImage("");
      setMode("profile")
      e.preventDefault();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const posterAvi = async () => {
    setLoading(true);
    axios
      .post(`http://localhost:9999/avi`, {
        avi,
        to: params.id,
        userId: curentUser,
      })
      .then((result) => {
        setLoading(false);
        toast.success("votre avi a été bien ajouter  !", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          animation: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setAvi("");
      });
  };


  return (
    <>
      <NavBar />
      <ToastContainer />
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg"
              src={cover} alt="" />

                { !isCurentUser ? (
                               <img
                               className="profileUserImg"
                               src={!noAvatar ? src:noAvatare}
                               alt=""
                               />
                ):(
              <label htmlFor="photo-upload" className="profileUserImg-user">
                <div className="show-image img-upload">

                <img
                  className="profileUserImg-image"
                  for="photo-upload"
                  src={!noAvatar ? src:noAvatare}
                  alt=""
                  />
                <AddPhotoAlternate className="editing"/>
                </div>
                

                <input
                  id="photo-upload"
                  type="file"
                  onChange={changeProfileHandler}
                />
              </label>
              )}

            </div>

<div className="editing">

                {mode==="editing"? (<button className="save button" onClick={changeProfileHandler}> save</button>):null}

</div>


            <div className="profileInfo">
              <h4 className="profileInfoName">
                {user?.Nom + " " + user?.Prenom}{" "}

              </h4>

            </div>
          </div>
          <div className="profileRightBottom">
            <InformationUser user={user} />
          </div>
        </div>
      </div>


      <div className="cont-avi-ape">
        <Avis profileId={id} render={avi}/>

        {!isCurentUser && params.id && (
          <div className="form-avis">
            <div className="form-avis1">
              <TextField
                label="avis"
                value={avi}
                placeholder="avis ..."
                multiline
                // variant="outlined"
                className="p20"
                style={{ margin: "40px" }}
                onChange={(e) => setAvi(e.target.value)}
              />

              <Button onClick={posterAvi} disabled={!avi} className="btn-avi">
                {!isLoading ? (
                  "ajouter "
                ) : (
                  <CircularProgress size={30} style={{ color: "#96d0d98c" }} />
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
