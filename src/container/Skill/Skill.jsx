import React from "react";
import "./Skill.scss";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <section className="experiencia seccion-clara">
      <div className="container text-center">
        <div className="row">
          <div className="columna col-12 col-md-4">
            <i className="bi bi-laptop text-warning"></i>
            <p className="experiencia-titulo">Desarrollo Front end</p>
            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ durtation: 0.5 }}
              className="contenedor"
            >
              <p>
                Empece aprender desarrollo web desde la base como
                HTML,CSS,JavaScript. Luego, usar Herramietas como Bootstrap e
                implementarlo en framework como React:
              </p>
              <p>Actualmente implementando Typescript en React y Nextjs</p>
            </motion.div>
            <div className="badges-contenedor">
              <span className="badge text-bg-primary">HTML</span>
              <span className="badge text-bg-primary">CSS</span>
              <span className="badge text-bg-primary">JavaScript</span>
              <span className="badge text-bg-primary">React</span>
              <span className="badge text-bg-primary">Bootstrap</span>
              <span className="badge text-bg-primary">Prettier</span>
              <span className="badge text-bg-primary">Redux</span>
              <span className="badge text-bg-primary">Axios</span>
              <span className="badge text-bg-warning">Nextjs</span>
              <span className="badge text-bg-warning">Typescript</span>
            </div>
          </div>
          <div className="columna col-12 col-md-4">
            <i className="bi bi-database text-warning"></i>
            <p className="experiencia-titulo">Desarrollo Back End</p>
            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ durtation: 0.5 }}
              className="contenedor"
            >
              <p>
                Gracias a la carrera que estudio Ing. Computacion, afiance
                conocimientos sobre Bases de Datos, su Entidad Relacion y manejo
                de LLaves foraneas.
              </p>
              <p>
                Actualmente con Django ha facilitado el aprendizaje desde el
                Back-end , Gracias a su Modelo vista Template, y para las
                consultas con ORM{" "}
              </p>
            </motion.div>
            <div className="badges-contenedor">
              <span className="badge text-bg-primary">Python</span>
              <span className="badge text-bg-primary">Django</span>
              <span className="badge text-bg-primary">MySQL</span>
              <span className="badge text-bg-primary">PostgreSQL</span>
              <span className="badge text-bg-primary">XAMMP</span>
            </div>
          </div>
          <div className="columna col-12 col-md-4">
            <i className="bi bi-pencil-fill text-warning"></i>
            <p className="experiencia-titulo">Hablidades y Aprendizaje</p>

            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ durtation: 0.5 }}
              className="contenedor"
            >
              <p>
                En un campo en constante evolución como el desarrollo web,
                mantenerse actualizado con las últimas tecnologías, herramientas
                y mejores prácticas es esencial. Tambien como son las
                metodologias de trabajo tanto SCRUM y RUP.
              </p>
              <p>
                Aparte de tener nocion en GIT y BASH. Actualmente ando
                Practicando Test con Jest y Docker para las BDD{" "}
              </p>
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
