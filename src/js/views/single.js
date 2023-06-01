import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [descripcion, setDescripcion]= useState({})
	const [propiedades, setPropiedades] = useState({});


	const getDescripcion = () => {
		fetch('https://www.swapi.tech/api/people/' + params.theid)
		  .then((res) => res.json())
		  .then((data) => {
			setDescripcion(data.result);
			fetch(data.result.properties.url)
			  .then((res) => res.json())
			  .then((datos) => setPropiedades(datos.result.properties));
		  });
	  };
	
	  useEffect(() => {
		getDescripcion();
	  }, []);

	return (
		<div className="jumbotron">
			<h1 className="display-4">{propiedades.name}  </h1>
			<p>{descripcion.description}</p>
			<div className="paneldescripcion"> 
			<img src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`} className="imagenpersonaje" alt="..." />
			<p>Star Wars, conocida también en español como La guerra de las galaxias, ​​​ es una franquicia y universo compartido de fantasía compuesta primordialmente de una serie de películas concebidas</p>
			</div>
			<hr className="my-4" />
			<div className="caracteristicas">
				<div>
				<h3>Name</h3>
				<p>{propiedades.name}</p>
				</div>
				<div>
				<h3>Birth_Year</h3>
				<p>{propiedades.birth_year}</p>
				</div>
				<div>
				<h3>Gender</h3>
				<p>{propiedades.gender}</p>
				</div>
				<div>
				<h3>Height</h3>
				<p>{propiedades.height}</p>
				</div>
				<div>
				<h3>Skin Color</h3>
				<p>{propiedades.skin_color}</p>
				</div>
				<div>
				<h3>Eye Color</h3>
				<p>{propiedades.eye_color}</p>
				</div>
			</div>

			<Link to="/">
				<span className="btn btn-warning btn-lg botondes" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
