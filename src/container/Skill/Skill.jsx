import React from 'react'
import './Skill.scss'

const Skill = () => {
  return (
    <section className="experiencia seccion-clara" >
    <div className="container text-center">
      <div className="row">
        <div className="columna col-12 col-md-4">
          <i className="bi bi-laptop"></i>
          <p className="experiencia-titulo">Desarrollo Web</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            laoreet, odio eget fringilla scelerisque, sem purus fringilla
            mauris, nec ultricies nisl nisl sit amet dolor.
          </p>
          <div className="badges-contenedor">
            <span className="badge text-bg-primary">HTML</span>
            <span className="badge text-bg-primary">CSS</span>
            <span className="badge text-bg-primary">JavaScript</span>
            <span className="badge text-bg-primary">React</span>
          </div>
        </div>
        <div className="columna col-12 col-md-4">
          <i className="bi bi-laptop"></i>
          <p className="experiencia-titulo">Herramientas</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            laoreet, odio eget fringilla scelerisque, sem purus fringilla
            mauris, nec ultricies nisl nisl sit amet dolor.
          </p>
          <div className="badges-contenedor">
            <span className="badge text-bg-primary">Prettier</span>
            <span className="badge text-bg-primary">Redux Toolkit</span>
            <span className="badge text-bg-primary">Git</span>
            <span className="badge text-bg-primary">Axios</span>
          </div>
        </div>
        <div className="columna col-12 col-md-4">
          <i className="bi bi-laptop"></i>
          <p className="experiencia-titulo">Estudiante</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            laoreet, odio eget fringilla scelerisque, sem purus fringilla
            mauris, nec ultricies nisl nisl sit amet dolor.
          </p>
          <div className="badges-contenedor">
            <span className="badge text-bg-primary">freeCodeCamp</span>
            <span className="badge text-bg-primary">Udemy</span>
            <span className="badge text-bg-primary">UDO</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Skill