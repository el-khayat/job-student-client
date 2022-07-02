import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../../myposts/myposts.scss'
import {toast} from "react-toastify";
import {Link} from "react-router-dom"

import ContentPlaceHolder from "../../../components/contentPlaceHolder"
import Search from "../../../components/Search/Search"
import {
  LocationOnSharp,
} from "@material-ui/icons";

const Myposts = () => {

const [postP, setPostP] = useState([]);
const [postE, setPostE] = useState([]);
const [posts, setPosts] = useState([]);

const [filter, setFilter] = useState("");
const [isloading, setLoading] = useState(true);

 useEffect( () =>{
    FpostP();


 }, []);

 const handelSearchChange = (e)=>{
 // console.log()
 setFilter(e.target.value) ;
 }


const userId = sessionStorage.getItem("userId")
// const host = "192.168.43.146" ;
const host = "localhost" ;

  const FpostP = () =>{
        axios.get(`http://${host}:9999/PostProf`)
        .then(res => res.data)
        .then( (postsP) =>{
         setPostP(postsP)
          return postsP;
         })
        .then( postsP =>{
                    axios.get(`http://${host}:9999/post`)
                       .then(res => res.data)
                       .then( (postsE) =>{
                        setPostE(postsE)
                          setPosts([...postsP,...postsE])
                          setLoading(false)
                                           })
            })
         .catch(e =>{
               console.log('the error is ',e);
            })
   };




   const fpostE = async () =>{
        const data = await axios.get(`http://localhost:9999/post/${userId}`) ;
       
          await setPostE(data.data);
           console.log('from funct de utudiant ',postE);
       
      
   };

  const deletePost = async (post) => {
     
if (  postE.includes(post)) {
          if(window.confirm ("vous voulez supprimer ce poste?")){
          const res = await axios.delete( `http://localhost:9999/post/${post.id}`)
          if (res.status === 200){
            toast.success(res.data);} } 
            
}else{
     
            if(window.confirm ("vous voulez supprimer ce poste?")){
               const res = await axios.delete( `http://localhost:9999/postProf/${post.id}`)
               if (res.status === 200){
                 toast.success(res.data);} } 
}

       

  }

  return (
    <div className="contentt">
      <h1 className='h1a' >Les postes des utilisateurs</h1>
      <div style={{width:"100%",heigth:"100px"}}> 
       
<Search onChange={handelSearchChange}/> 
      </div>
         
                      {
                      !isloading ? 
                         posts.length < 1 ? (<p> Aucune post </p>) :
                         posts
                         .filter(post=>{
                          if(!filter) return true ;
                          const query = filter.toLowerCase();
                          return post.commentaire.includes(query);
                         })
                         .map((item, index ) => (



           <div style={{width:"85%",marginLeft:"auto",marginRight:"auto"}} key={item.id}>

                   <div className="containerr">
                        
                           <Link to={`/profile/${item.user.id}`} style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                               <div>
                                  <img className="imgg" src={`http://localhost:9999/images/${item.user.Image}`} alt='ff'/>
                              </div>
                               <div>
                                  <h3 style={{marginLeft:"40px"}}  > {item.user?.Nom}  {item.user.Prenom} </h3> 
                                 </div>
                            </Link>

                        <div className="textt" style={{marginTop:"20px"}}>
                              <h4  className="ff">  <LocationOnSharp />  {item.user.ville} </h4>
                              <h4  className="ff"> {item.titre}</h4>
                              <p>{item.commentaire}  </p>
                              <button className="button" style={{transition:"0.5s !important"}} onClick={() => deletePost(item)}> Supprimer</button>
                        </div>
                  </div>  


           </div>
                      )
                      )
                      : <ContentPlaceHolder/> 
                      
                     
                     
                     }
        





    </div>
  )
}

export default Myposts