
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starWars from "../../img/starwars.png";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const handleFavoriteRemove = (event, message) => {
    event.stopPropagation(); // Evitar la propagación del evento
    actions.FavoriteRemove(message);
  };
  

  return (
    <nav className="navbar navbar-light bg-dark mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img className="imagenlogo" src={starWars} alt="Star Wars" />
        </span>
      </Link>

      <div className="dropdown">
        <Link
          className="btn btn-warning dropdown-toggle favorito"
          to="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favoritos
        </Link>

        <ul className="dropdown-menu listafavoritos" aria-labelledby="dropdownMenuLink">
          {store.message && store.message.length > 0 ?  store.message.map((message, index) => (
            <li className="list-group-item lista" key={index}>{message}  <button className="btn btn-link botonx" onClick={(event) => handleFavoriteRemove(event, message)} >
            <i className="fa fa-times" aria-hidden="true"></i>
          </button></li>
          )): <li className="listavacia" style={{ width: '250px', fontSize: '20px' }}>Lista Vacia</li>}
        </ul>
      </div>
    </nav>
  );
};


