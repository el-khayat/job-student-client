import React from 'react';
import './buttonsAddPost.css'
import { Link } from 'react-router-dom';

const Buttons = ()=>{
  return(

    <div className='buttons'>
          <Link to={"addE"} className='btn-post'> 
            ajouter post comme etudiant
          </Link>

            <Link to={"addP"}className='btn-post'> ajouter post comme prof</Link>
     
     
      </div>
      )
}
export default Buttons ;