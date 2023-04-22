import React from 'react'
import './Footer.scss'
import {images} from '../../constants/index'

const Footer = () => {
  return (
    <footer className="seccion-black d-flex flex-column align-items-center justify-content-center">
      <img className="footer-logo" src={images.Logo_LA} alt="logo"/>
      <p className="footer-texto text-center">Aprendo y creo todos los dias.<br/>Creemo un proyecto juntos</p>
      <div className="iconos-redes-sociales d-flex flex-wrap align-item-center justify-content-center">
        <a href="#" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><i className="bi bi-envelope"></i></a>
      </div>
      <div className="derechos-deautor">Creado por Luis Agreda (2023) &#169;</div>
    </footer>
  )
}

export default Footer