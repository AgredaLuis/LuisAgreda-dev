import React from 'react'
import './Contact.scss'
const Contact = () => {
  return (
    <section className="contacto seccion-black" id="contacto">
      <div className="container">
        <div
          className="container text-center rectangulo d-flex justify-content-evenly"
        >
          <div className="row">
            <div className="col-12 col-md-4 seccion-titulo">Hablemos</div>
            <div className="col-12 col-md-4 descripcion">
              Se que un buen desarrollo es un buen negocio. Contactamen para tu
              nueva WEB
            </div>
            <div className="col-12 col-md-4">
              <a href="mailto:luis.agreda98@gmail.com">
                <button type="button">
                  Contacto <i className="bi bi-envelope-at"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact