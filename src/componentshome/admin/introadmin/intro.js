import './intro.scss'
import { init } from "ityped";
import { useEffect, useRef } from "react";
const Intro = () => {
  const textRef = useRef();

  
  return (
    <div className="introA" id="introA">
      <div className="leftA">
        <div className="imgContainerA">
          
        </div>
      </div>
      <div className="rightA">
        <div className="wrapperA">
          <h2>l'administrateur</h2>
          <h1>Nazik ES-SAFI</h1>
          
        </div>
        
      </div>
    </div>
  );
}

export default Intro