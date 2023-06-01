import React, { useContext, useEffect, useState }from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Cartas from "../component/cartas";
import sable from "../../img/sable.png";
import sable2 from "../../img/sable2.png";
import CartasPlanetas from "../component/cartasplanets";
import { Context } from "../store/appContext";

const Home = () => {

	const [personajes, setPersonajes] = useState([]);
	const [planetas , setPlanetas] = useState([]);
	const {store} = useContext(Context)

	// const obtenerPersonajes = () => {
	// 	fetch("https://swapi.dev/api/people/")
	// 	  .then((res) => res.json())
	// 	  .then((data) => setPersonajes(data.results));
	//   };

	//   const obtenerPlanetas = () => {
	// 	fetch("https://swapi.dev/api/planets/")
	// 	  .then((res) => res.json())
	// 	  .then((data) => setPlanetas(data.results));
	//   };
	

	//   useEffect(() => {
	// 	// obtenerPersonajes();
	// 	obtenerPlanetas();
		
	//   }, []);
	return(
	<div className="text-center mt-2">
		<h1 className="titulos">Characters</h1>
		<img src={sable} className="sable" alt="..." />
		<div className="cartascontenedor">
			
		{store.personajes.map((personaje, index) => (
          <Cartas
            key={index + 1}
            personaje={personaje}
            gender={personaje.gender}
            uid={index + 1}
            hair={personaje.hair_color}
            name={personaje.name}
            eyes={personaje.eye_color}
			img={`https://starwars-visualguide.com/assets/img/characters/${index +1 }.jpg`}
          />
        ))}
		      </div>
      <h1 className="titulos">Planets</h1>
	  <img src={sable2} className="sable" alt="..." />
      <div className="cartascontenedor">
        {store.planetas.map((planeta, index) => (
          <CartasPlanetas
          key={index + 1}
          personaje={planeta}
          nameplanet={planeta.name}
          polulation={planeta.population}
          uidplanet={index + 1}
          terrain={planeta.terrain}
		  img={`https://starwars-visualguide.com/assets/img/planets/${index +1 }.jpg`}
        />
        ))}

		</div>
	</div>
);
}
export default Home;