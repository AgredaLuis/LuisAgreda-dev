import React from 'react'
import {images} from '../../constants/index'
import './Hero.scss'

const Hero = () => {
  return (
    <section className="hero align-items-stretch">
      <div
        className="hero-principal d-flex flex-column justify-content-center align-items-center"
      >
        <img
          className="hero-imagen-desarrollador rounded-circle"
          src={images.desarrollador2}
          alt="Foto de Jane Doe"
        />
        <h1>Hola, soy Luis Agreda</h1>
        <h2>Desarrollo sitios web</h2>
      </div>
      <div className="hero-inferior">
        <img
          className="hero-inferior-imagen img-fluid"
          src={images.hero_inferior}
          alt="Monitor, laptop y logos de HTML, CSS, JavaScript y React."
        />
      </div>
    </section>
  )
}

export default Hero