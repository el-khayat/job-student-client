import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './myposts.scss'
import {toast} from "react-toastify";
import ContentPlaceHolder from "../../components/contentPlaceHolder"
import Search from "../../components/Search/Search"

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
        axios.get(`http://${host}:9999/PostProf/${userId}`)
        .then(res => res.data)
        .then( (postsP) =>{
         setPostP(postsP)
          return postsP;
         })
        .then( postsP =>{
                    axios.get(`http://${host}:9999/post/${userId}`)
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
      <h1 className='h1a' >Mes  Postes </h1>
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
                            <div className="testimonialss" key={item.id}>
                         <div className="containerr">
                                       <div>
                                          <img className="imgg" src="https://www.legalloromain.net/wp-content/uploads/2020/06/Jeune-Fille-Etudiante-900x579-1.jpg" alt='ff'/>
                                       </div>
                                       &nbsp;&nbsp;&nbsp;
                          
          <div className="textt">
                         <h3  className="ff"> {item.user?.Nom}  {item.user.Prenom} </h3> 
                         <h4  className="ff">    {item.user.ville} </h4>
                         <h4  className="ff"> {item.titre}</h4>
                        <p>{item.commentaire}  </p>
                        <button> Modifier</button>  &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deletePost(item)}> Supprimer</button>
                       

                         
                       
                 
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