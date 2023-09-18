import React from "react";
import "./Navbar.scss";
import { images } from "../../constants/index";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-toggler"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/">
          <img className="imagen" src={images.Logo_LA} alt="icono de la pagina web" />
        </a>
        <div className="collapse navbar-collapse" id="navbar-toggler">
          <ul className="navbar-nav d-flex justify-content-center align-item-center">
            <li className="nav-item">
              <div />
              <a className="nav-link" href="#sobre-mi">
                Sobre mi
              </a>
            </li>
            <li className="nav-item">
              <div />
              <a className="nav-link" href="#proyectos">
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <div />
              <a className="nav-link" href="#testimonios">
                Testimonios
              </a>
            </li>
            <li className="nav-item">
              <div />
              <a className="nav-link" href="#contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
