import React, { Component } from "react";
import starWars from "../../img/starwars.png";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center ">
		<p>
		Made <span className="navbar-brand mb-0 h1">
          <img className="imagenlogo" src={starWars} alt="Star Wars" />
        </span> by{" "}
			<a href="https://github.com/AlejandroRivera2306">Alejandro Rivera</a>
		</p>
	</footer>
);
