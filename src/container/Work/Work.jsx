import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants/index";
import "./Work.scss";


const scaleVariants ={
  whileInView:{
    scale: [0.1,1],
    opacity: [0,1],
    transition: {
      durtation:1,
      ease: 'easeInOut'
    }
  }
}

const Work = () => {
  
  return (
    <section
      className="proyectos-recientes seccion-clara d-flex flex-column"
      id="proyectos"
    >
      <h2 className="seccion-titulo texto-negro">Mis proyectos</h2>
      <h3 className="seccion-descripcion">
        Estos son algunos proyectos recientes 
      </h3>

      {/* Galeria de proeycto */}
      <div className="container text-center proyectos-contenedor ">
        <div className="row">
          {/* proyecto 1 */}

          <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-12 col-md-6 col-lg-4"
          >
              <div className="proyecto">
                <img src={images.proyecto1} alt="gerich-restaurant-projet" />
                <div className="overlay">
                  <p>Proyecto 1</p>
                  <div className="iconos-contenedor">
                    <a href="https://github.com/AgredaLuis/gerich-restaurant" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="https://agredaluis.github.io/gerich-restaurant/" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-laptop"></i>
                    </a>
                  </div>
                </div>
            </div>
          </motion.div>
          {/* Proyecto 2 */}

          <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-12 col-md-6 col-lg-4"
          >
            <div className="proyecto">
              <img src={images.proyecto22} alt="Proyecto-ecomerce-phones" />
              <div className="overlay">
                <p>Proyecto 2</p>
                <div className="iconos-contenedor">
                  <a href="https://github.com/AgredaLuis/e-commerce-phones" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="https://agredaluis.github.io/e-commerce-phones/" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-laptop"></i>
                  </a>
                </div>
              </div>
            </div>
            </motion.div>
          {/* Proyecto 3 */}
          <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-12 col-md-6 col-lg-4"
          >
            <div className="proyecto">
              <img src={images.proyecto33} alt="employee-tracker-project" />
              <div className="overlay">
                <p>Proyecto 3</p>
                <div className="iconos-contenedor">
                  <a href="https://github.com/AgredaLuis/employee-teams-tracker" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="https://agredaluis.github.io/employee-teams-tracker/" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-laptop"></i>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          

          {/* Proyecto 4 */}

          <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="col-12 col-md-6 col-lg-4"
          >

            <div className="proyecto">
              <img src={images.proyecto44} alt="meals-application-project" />
              <div className="overlay">
                <p>Proyecto 4</p>
                <div className="iconos-contenedor">
                  <a href="https://github.com/AgredaLuis/meals-application" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="https://agredaluis.github.io/meals-application/" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-laptop"></i>
                  </a>
                </div>
              </div>
            </div>

          </motion.div>
          

          </div>
      </div>
      <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
      >
      <a href="https://github.com/AgredaLuis?tab=repositories" target="_blank" rel="noopener noreferrer">
        <button type="button" className="btn btn-info ">
          Ver mas proyectos <i className="bi bi-arrow-right-circle"></i>
        </button>
      </a>
      </motion.div>
    </section>
  );
};

export default Work;
