import React from "react";
import "./Articles.scss";
import { motion } from "framer-motion";

const Articles = () => {
  return (
    <section className="articulos justify-content-start">
      <h2 className="seccion-titulo texto-negro">Articulos</h2>

      <motion.div
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ durtation: 0.5 }}
        className="card"
      >
          <div className="card-header">Mas recientes</div>
          <ul className="list-group list-group-flush">
            <a href="https://github.com/AgredaLuis/react-rtk-crud" target="_blank" rel="noopener noreferrer">
              <li className="list-group-item">
                Ve lo simple que puede ser Redux Toolkit con un simple CRUD
              </li>
            </a>
            <a href="https://github.com/AgredaLuis/Estructura-de-Datos-Cpp" target="_blank" rel="noopener noreferrer">
              <li className="list-group-item">Te muestro  de manera facil estructura de Datos en C+++</li>
            </a>
            <a href="https://agredaluis.github.io/Zorro-y-los-Sabuesos/" target="_blank" rel="noopener noreferrer">
              <li className="list-group-item">
                Juego del Zorro y el Sabueso con AI : usando funcion minmax()
              </li>
            </a>
            <a href="https://agredaluis.github.io/Landing-Page-Fazt/" target="_blank" rel="noopener noreferrer">
              <li className="list-group-item">No sabes como hacer un Blog? Tienes que ver este modelo de Landing Page</li>
            </a>
            <a href="#" className="deshabilitado" target="_blank" rel="noopener noreferrer">
              <li className="list-group-item">Lua y su ecosistema </li>
            </a>
            <a href="#" className="deshabilitado" target="_blank" rel="noopener noreferrer">
              <li className="list-group-item">Echa un vistazo de mi recorrido en Electronica</li>
            </a>
          </ul>
      </motion.div>
    </section>
  );
};

export default Articles;
