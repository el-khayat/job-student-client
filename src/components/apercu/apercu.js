import { useRef, useState } from "react";
import {
  Star,
  StarHalf,
  LocationCitySharp,
  LocationOnSharp,
} from "@material-ui/icons";

/*



 Star, StarBorder, StarBorderOutlined, StarBorderRounded, StarBorderSharp, 
 StarBorderTwoTone, StarHalf, StarHalfOutlined, StarHalfRounded, StarHalfSharp, 
 StarHalfTwoTone, StarOutline, StarOutlineOutlined, StarOutlineRounded,
  StarOutlineSharp, StarOutlineTwoTone, StarOutlined, StarRate, StarRateOutlined, 
  StarRateRounded, StarRateSharp, StarRateTwoTone, StarRounded, 
 StarSharp, StarTwoTone, Stars, StarsOutlined, StarsRounded, StarsSharp, 
 StarsTwoTone,



LocationCity, LocationCityOutlined, LocationCityRounded, LocationCitySharp,
 LocationCityTwoTone, LocationDisabled, LocationDisabledOutlined, LocationDisabledRounded, 
 LocationDisabledSharp, LocationDisabledTwoTone, LocationOff, LocationOffOutlined, 
 LocationOffRounded, LocationOffSharp, LocationOffTwoTone, LocationOn, LocationOnOutlined, 
 LocationOnRounded, LocationOnSharp, LocationOnTwoTone, LocationSearching,
  LocationSearchingOutlined, 
LocationSearchingRounded, LocationSearchingSharp, LocationSearchingTwoTone


*/
import { useSpring, animated } from "@react-spring/web";
// import { useControls } from "leva";
import "../../componentshome/appercu/appercu.scss";
import "./apercu.css";

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 5,
  (x - rect.left - rect.width / 2) / 5,
  1.09,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function Card({
  image,
  name,
  matier,
  description,
  ville,
  ecole,
}) {
  const ref = useRef(null);
  const [xys, set] = useState([0, 0, 1]);
  const config = {
    mass: 1,
    tension: 170,
    friction: 26,
    clamp: false,
    precision: 0.01,
    velocity: 0,
    // easing: (t) => t,
  };

  const props = useSpring({ xys, config });

  return (
    <div className="ccard-main" ref={ref}>
      <animated.div
        className="ccard"
        style={{ transform: props.xys.to(trans) }}
        onMouseLeave={() => set([0, 0, 1])}
        onMouseMove={(e) => {
          const rect = ref.current.getBoundingClientRect();
          set(calc(e.clientX, e.clientY, rect));
        }}
      >
        <div className="testimonials">
          <div className="container">
            <div className="img-name">
              <img
                className="img"
                src={
                  image
                    ? image
                    : "https://www.legalloromain.net/wp-content/uploads/2020/06/Jeune-Fille-Etudiante-900x579-1.jpg"
                }
                alt="ll"
              />
              <div>
                <h5> {name}</h5>
              </div>
            </div>

            <div className="text">
              <h6 className="prof-de"> professeur de {matier}</h6>
              <div className="rating">
                <Star color={"red"} />
                <Star />
                <Star />
                <Star />
                <StarHalf />
              </div>
              <div className="position">
                <h6>
                  {" "}
                  <LocationOnSharp />
                </h6>
                <h6> tetouan </h6>
              </div>
              <div className="description-aper">
                <p>
                  {description}
                  {/* Je suis professeur d'éducation primaire Avec une éxpériences
                  de 5 ans au cycle primaire J'offre des cours en ligne aux
                  intéressés (Cours de Maths-Arabe-Francais) */}
                </p>
              </div>

              <p className="lead text-secondary ">
                {" "}
               {ecole} 
              </p>
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
}
