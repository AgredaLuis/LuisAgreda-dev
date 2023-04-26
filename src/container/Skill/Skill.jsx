import React from "react";
import "./Skill.scss";
import {motion} from 'framer-motion'

const Skill = () => {
  return (
    <section className="experiencia seccion-clara">
      <div className="container text-center">
        <div className="row">
          <div className="columna col-12 col-md-4">
            <i className="bi bi-laptop"></i>
            <p className="experiencia-titulo">Desarrollo Web</p>
            <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ durtation: 0.5 }}
          className="contenedor"
        >
            <p>Experiencia en desarrollo web utilizando lenguajes como:</p>

        </motion.div>
            <div className="badges-contenedor">
              <span className="badge text-bg-primary">HTML</span>
              <span className="badge text-bg-primary">CSS</span>
              <span className="badge text-bg-primary">JavaScript</span>
              <span className="badge text-bg-primary">React</span>
            </div>
          </div>
          <div className="columna col-12 col-md-4">
            <i className="bi bi-wrench"></i>
            <p className="experiencia-titulo">Herramientas</p>
            <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ durtation: 0.5 }}
          className="contenedor"
        >
            <p>
              Las herramientas son una parte fundamental en el flujo de trabajo
              de un desarrollador web,brindan una serie de beneficios y ventajas
              que facilitan el desarrollo de aplicaciones web.
            </p>
        </motion.div>
            <div className="badges-contenedor">
              <span className="badge text-bg-primary">Prettier</span>
              <span className="badge text-bg-primary">Redux Toolkit</span>
              <span className="badge text-bg-primary">Git</span>
              <span className="badge text-bg-primary">Axios</span>
              <span className="badge text-bg-primary">Vite</span>
            </div>
          </div>
          <div className="columna col-12 col-md-4">
            <i className="bi bi-pencil-fill"></i>
            <p className="experiencia-titulo">Estudiante</p>

            <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ durtation: 0.5 }}
          className="contenedor"
        >
            <p>
              En un campo en constante evolución como el desarrollo web,
              mantenerse actualizado con las últimas tecnologías, herramientas y
              mejores prácticas es esencial.
            </p>
        </motion.div>
            <div className="badges-contenedor">
              <span className="badge text-bg-primary">freeCodeCamp</span>
              <span className="badge text-bg-primary">Udemy</span>
              <span className="badge text-bg-primary">UDO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
