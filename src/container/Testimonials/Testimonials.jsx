import React from "react";
import "./Testimonials.scss";
import { motion } from "framer-motion";
import { images } from "../../constants/index";

const Testimonials = () => {
  return (
    <section className="testimonios seccion-clara" id="testimonios">
      <h2 className="seccion-titulo">Testimonios</h2>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ durtation: 0.5 }}
        className="app__header-info"
      >
        <h3 className="seccion-descripcion">
          Estos son algunos testimonios de colegas y clientes...
        </h3>
      </motion.div>
      {/* Carrousel */}
      <div className="carousel carousel-dark slide" id="testimonios-carrusel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <img
                className="testimonio-imagen rounded-circle"
                src={images.jose}
                alt="cliente1"
              />
              <p className="testimonio-texto">
                Enfocado siempre en probar e investigar cosas nuevas,
                manteniendo siempre la calidad humana y trabajo en equipo.
              </p>
              <div className="testimonio-info">
                <p className="cliente">Antuan</p>
                <p className="cargo">Programador Full-Stack</p>
              </div>
              <a
                href="https://www.linkedin.com/in/antuan01/"
                target="_blank"
                className="testimonio-link"
              >
                <i class="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonios-carrusel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonios-carrusel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
