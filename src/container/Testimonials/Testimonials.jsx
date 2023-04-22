import React from 'react'
import './Testimonials.scss'
import {images} from '../../constants/index'


const Testimonials = () => {
  return (
    <section className="testimonios seccion-clara" id="testimonios">
      <h2 className="seccion-titulo">Testimonios</h2>
      <h3 className="seccion-descripcion">
        Estos son algunos testimonios de colegas y clientes...
      </h3>
      {/* Carrousel */}
      <div className="carousel carousel-dark slide" id="testimonios-carrusel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <img
                className="testimonio-imagen rounded-circle"
                src={images.cliente1}
                alt="cliente1"
              />
              <p className="testimonio-texto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repudiandae sit libero excepturi? Asperiores neque molestias
                doloribus fuga dicta quaerat ipsum.
              </p>
              <div className="testimonio-info">
                <p className="cliente">Gino</p>
                <p className="cargo">Gerente en proyecto en desarrollo web</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <img
                className="testimonio-imagen rounded-circle"
                src={images.cliente2}
                alt="cliente1"
              />
              <p className="testimonio-texto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repudiandae sit libero excepturi? Asperiores neque molestias
                doloribus fuga dicta quaerat ipsum.
              </p>
              <div className="testimonio-info">
                <p className="cliente">Gino</p>
                <p className="cargo">Gerente De Diseño de mi Pagina web</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <img
                className="testimonio-imagen rounded-circle"
                src={images.cliente3}
                alt="cliente1"
              />
              <p className="testimonio-texto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repudiandae sit libero excepturi? Asperiores neque molestias
                doloribus fuga dicta quaerat ipsum.
              </p>
              <div className="testimonio-info">
                <p className="cliente">Euge Oller</p>
                <p className="cargo">Aprende Aprendiendo</p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimonios-carrusel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimonios-carrusel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>

  )
}

export default Testimonials