import React from "react";
import { images } from "../../constants/index";
import { motion } from "framer-motion";
import "./Hero.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      durtation: 1,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <section className="hero align-items-stretch">
      <div className="hero-principal d-flex flex-column justify-content-center align-items-center">
        <img
          className="hero-imagen-desarrollador rounded-circle"
          src={images.Profile_picture}
          alt="Luis Agreda"
        />
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ durtation: 0.5 }}
          className="app__header-info"
        >
          <h1>Hola, soy Luis Agreda</h1>
          <h2>Desarrollador Web</h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
