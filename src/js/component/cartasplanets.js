import React,  {useContext, useState} from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext.js";

const CartasPlanetas = (props) => {
    const [buttonColor, setButtonColor] = useState(""); // Estado local para el color de fondo del botón
    const changeButtonBackground = () => {
      setButtonColor("orange"); // Actualiza el estado para cambiar el color de fondo a naranja
     
    };
    const { store, actions } = useContext(Context);
    // console.log('desde cartas')
     console.log(actions.cambiarMensaje)
  return (
    <div className="carta">
      <div className="card" style={{ width: "100%" }}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h2 className="card-title">{props.nameplanet}</h2>
          <div className="propiedades">
            <p>Population: {props.polulation}</p>
            <p>Terrain: {props.terrain}</p>
          </div>
          <div className="botonescarta">
            <Link to={"/singleplanet/" + props.uidplanet} className="btn btn-primary botonlearn">
              Learn More!
            </Link>
            <button
              type="button"
              className= {`btn btn-outline-warning botonlearn  ${buttonColor ? "orange-bg" : ""}`}
              onClick={() => {
                changeButtonBackground();
                actions.cambiarMensaje("(P) "+props.nameplanet);
              }}
              
            >
              <i className="fa fa-heart text-danger" />
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};


export default CartasPlanetas;