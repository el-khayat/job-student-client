import './topbar.scss'
import { Link } from 'react-router-dom'


const Topbar = () => {
  return (
    <div  className="topbar ">
      <div className="wrapper">
        <div className="left">
           <a  className='logo'>PageAdmin. </a>
           <div className="number"> 
           <span> <Link to="/siladmin/listeU">Liste des utilisateurs </Link> </span>
           </div>
           <div className="number"> 
           <span> <Link to="/siladmin/listeP"> Liste des postes</Link> </span>
           </div>

        </div>
       
      </div>
     
    </div>
  )
}

export default Topbar