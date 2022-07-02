import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {toast} from "react-toastify";
import { Link } from 'react-router-dom';
import ContentPlaceHolder from "../contentPlaceHolder"
import Search from "../Search/Search"


import {
   LocationOnSharp,
 } from "@material-ui/icons";


 
const PostP = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
const [isloading, setLoading] = useState(true);

const handelSearchChange = (e)=>{
   // console.log()
   setFilter(e.target.value) ;
   }
 useEffect(() =>{
    postRouter();

 }, []);

  const postRouter = async() =>{
       const res = await axios.get('http://localhost:9999/PostProf');
       if (res.status === 200){
           setData(res.data)
           setLoading(false)
       }
  };


  return (
    <div className="contentt">
          <h1 className="hood  "   width="170"  height="30"> Postes    Professeurs</h1>
          <div style={{width:"100%",heigth:"100px"}}> 
       
       <Search onChange={handelSearchChange}/> 
             </div>
                      {
                      
                      !isloading ? 
                      data.length < 1 ? (<h1> Aucune post </h1>) :
                      data
                      .filter(post=>{
                       if(!filter) return true ;
                       const query = filter.toLowerCase();
                       return post.commentaire.toLowerCase().includes(query);
                      })
                      
                      .map((item, index ) => (

          <div style={{width:"85%",marginLeft:"auto",marginRight:"auto"}} key={item.id}>

                   <div className="containerr">
                        <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                            <Link to={`/profile/${item.user.id}`} style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                               <div>
                                  <img className="imgg" src={`http://localhost:9999/images/${item.user.Image}`} alt='ff'/>
                              </div>
                               <div>
                                  <h3 style={{marginLeft:"40px"}}  > {item.user?.Nom}  {item.user.Prenom} </h3> 
                                 </div>
                            </Link>
                        </div>

                        <div className="textt" style={{marginTop:"20px"}}>
                              <h4  className="ff">  <LocationOnSharp />  {item.user.ville} </h4>
                              <h4  className="ff"> {item.titre}</h4>
                              <p>{item.commentaire}  </p>
                        </div>
                  </div>  


           </div>
                      )) : <ContentPlaceHolder/> 
                      
                      }
        




    </div>
  )
}

export default PostP