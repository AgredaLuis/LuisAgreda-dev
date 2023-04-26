import React from "react";
import "./About.scss";
import {motion} from 'framer-motion'

const About = () => {
  return (
    <section className="sobre-mi seccion-black" id="sobre-mi">
      <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ durtation: 0.5 }}
          className="contenedor"
        >
        <h2 className="seccion-titulo texto-white">Conoce a Luis Agreda</h2>
        <p className="seccion-texto">
        Soy un apasionado estudiante de Ingeniería en Computación con habilidades en desarrollo web frontend, buscando oportunidades para aplicar mis conocimientos y creatividad en proyectos emocionantes.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
