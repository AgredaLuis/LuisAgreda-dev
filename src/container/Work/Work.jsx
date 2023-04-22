import React from "react";
import { images } from "../../constants/index";
import "./Work.scss";

const Work = () => {
  return (
    <section
      className="proyectos-recientes seccion-clara d-flex flex-column"
      id="proyectos"
    >
      <h2 className="seccion-titulo texto-negro">Mis proyectos</h2>
      <h3 className="seccion-descripcion">
        Estos son algunos proyectos que he hecho reciente
      </h3>

      {/* Galeria de proeycto */}
      <div className="container text-center proyectos-contenedor">
        <div className="row">
          {/* proyecto 1 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="proyecto">
              <img src={images.proyecto1} alt="proyecto1" />
              <div className="overlay">
                <p>Proyecto 1</p>
                <div className="iconos-contenedor">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-laptop"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Proyecto 2 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="proyecto">
              <img src={images.proyecto6} alt="proyecto1" />
              <div className="overlay">
                <p>Proyecto 2</p>
                <div className="iconos-contenedor">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-laptop"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Proyecto 3 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="proyecto">
              <img src={images.proyecto2} alt="proyecto1" />
              <div className="overlay">
                <p>Proyecto 3</p>
                <div className="iconos-contenedor">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-laptop"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Proyecto 4 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="proyecto">
              <img src={images.proyecto3} alt="proyecto1" />
              <div className="overlay">
                <p>Proyecto 4</p>
                <div className="iconos-contenedor">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-laptop"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Proyecto 5 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="proyecto">
              <img src={images.proyecto4} alt="proyecto1" />
              <div className="overlay">
                <p>Proyecto 5</p>
                <div className="iconos-contenedor">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-laptop"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* PRoyecto 6 */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="proyecto">
              <img src={images.proyecto5} alt="proyecto1" />
              <div className="overlay">
                <p>Proyecto 6</p>
                <div className="iconos-contenedor">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-laptop"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="" target="_blank" rel="noopener noreferrer">
        <button type="button" className="btn btn-info">
          Ver mas proyectos <i className="bi bi-arrow-right-circle"></i>
        </button>
      </a>
    </section>
  );
};

export default Work;
