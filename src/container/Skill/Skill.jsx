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
                Empece aprender desarrollo web desde la base como
                HTML, CSS, JavaScript. Luego, usar Herramientas como Bootstrap e
                implementarlo en framework como React.
              </p>
              <p>Actualmente implementando Typescript en React y Nextjs</p>
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
                Gracias a la carrera que estudio Ing. en Computacion, afiance conocimientos sobre las Bases de Datos, su Entidad Relacion y manejo de llaves foraneas.
              </p>
              <p>Junto a proyectos utilizando frameworks como DJANGO puse en practica el manejo de Modelo,Vista ,Template y los ORM</p>
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
