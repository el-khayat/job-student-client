import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {toast} from "react-toastify";
import {Link} from "react-router-dom"
import './utilisateurs.scss'
const Utilisateurs = () => {

  const [data, setData] = useState([]);

  useEffect(() =>{
     posteRouter();
 
  }, []);
 
   const posteRouter = async() =>{
        const res = await axios.get('http://localhost:9999/User');
        if (res.status === 200){
            setData(res.data)
        }
   };
   const deleteeUser = async (id) => {
    if(window.confirm ("vous voulez supprimer ce poste?")){
 
       const res = await axios.delete( `http://localhost:9999/User/${id}`)
       if (res.status === 200){
         toast.success(res.data);
         
     } 
         
    } 
 }

  return (
    <div className="contentt">
    
                {data.map((item, index ) => (
                   <div className="testimonialss" key={item.id + item.Nom} >
                   <div className="containerr">
                                                <Link to={`/profile/${item.id}`} style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                               <div>
                                  <img className="imgg" src={`http://localhost:9999/images/${item.Image}`} alt='ff'/>
                              </div>
                               <div>
                                  <h3 style={{marginLeft:"40px"}}  > {item?.Nom}  {item.Prenom} </h3> 
                                 </div>
                            </Link>
                                 &nbsp;&nbsp;&nbsp;
            

    <div className="textt">
    <h3 className="ville"> {item.Ville}  </h3> 
    <h4 className="matiere">{item.Matiere}</h4>      
    <h4 className="lead text-secondary "> NiveauEtudiant : {item.NiveauEtudiant}</h4>
               
    <button className="button" onClick={() => deleteeUser(item.id)}> Supprimer</button>
           
    </div>
    </div>  
     </div>
                ))}
  




</div>
  )
}

export default Utilisateurs