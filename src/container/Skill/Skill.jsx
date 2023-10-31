import React from "react";
import "./Skill.scss";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <section className="experiencia seccion-clara">
      <div className="container text-center">
        <div className="row">


          <div className="columna col-12 col-md-4">
            <div className="experiencia-header">
            <i className="bi bi-laptop text-warning"></i>
            <p className="experiencia-titulo">Desarrollo Frontend</p>
            </div>
            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ durtation: 0.5 }}
              className="contenedor"
            >
              <p>
                Comence el desarrollo web desde los fundamentos, aprendiendo tecnologías como HTML, CSS y JavaScript. Posteriormente, adquirí habilidades en herramientas como Bootstrap y las apliqué en marcos de trabajo avanzados como React.
              </p>
            </motion.div>
            <div className="badges-contenedor">
              <span className="badge text-bg-primary">HTML</span>
              <span className="badge text-bg-primary">CSS</span>
              <span className="badge text-bg-primary">JavaScript</span>
              <span className="badge text-bg-primary">React</span>
              <span className="badge text-bg-primary">Bootstrap</span>
              <span className="badge text-bg-primary">Redux</span>
              <span className="badge text-bg-warning">Nextjs</span>
              <span className="badge text-bg-warning">Typescript</span>
            </div>
          </div>
          <div className="columna col-12 col-md-4">
            <div className="experiencia-header">
            <i className="bi bi-database text-warning"></i>
            <p className="experiencia-titulo">Base de Datos</p>
            </div>
            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ durtation: 0.5 }}
              className="contenedor"
            >
              <p>
              Mi formación académica en Ingeniería en Computación me ha permitido consolidar mis conocimientos en Bases de Datos, incluyendo el diseño de Entidades y Relaciones, así como el manejo de llaves foráneas. Esta sólida base teórica y práctica me capacita para enfrentar desafíos complejos en el campo de la gestión de datos.
              </p>

            </motion.div>
            <div className="badges-contenedor">
              <span className="badge text-bg-primary">Laravel</span>
              <span className="badge text-bg-primary">Django</span>
              <span className="badge text-bg-primary">MySQL</span>
              <span className="badge text-bg-primary">PostgreSQL</span>
              <span className="badge text-bg-primary">XAMMP</span>
            </div>
          </div>
          <div className="columna col-12 col-md-4">
            <div className="experiencia-header">
            <i className="bi bi-pencil-fill text-warning"></i>
            <p className="experiencia-titulo">Hablidades y Aprendizaje</p>
            </div>

            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ durtation: 0.5 }}
              className="contenedor"
            >
              <p>
                Junto a las nociones obtenidas con la practica, Git y GitHub han sido herramientas muy utiles para mis proyectos personales, concatenado a metodologias de trabajo como SCRUM y RUP. 
              </p>
              <p>Actualmente en la practica de mejor escritura para mayor explicacion de mi codigo y buenas practica como el formato ESlint</p>
            </motion.div>
            <div className="badges-contenedor">
              <span className="badge text-bg-primary">freeCodeCamp</span>
              <span className="badge text-bg-primary">Udemy</span>
              <span className="badge text-bg-primary">UDO</span>
              <span className="badge text-bg-primary">Git</span>
              <span className="badge text-bg-primary">GitHub</span>
              <span className="badge text-bg-primary">Vitest</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
