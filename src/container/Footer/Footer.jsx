import React from 'react'
import './Footer.scss'
import CVLuisAgreda from '../../assets/CV-Luis-Agreda.pdf'
import {images} from '../../constants/index'

const Footer = () => {
  return (
    <footer className="seccion-black d-flex flex-column align-items-center justify-content-center">
      <img className="footer-logo" src={images.Logo_LA} alt="logo"/>
      <p className="footer-texto text-center">Aprendo y creo todos los dias.<br/></p>
      <div className="iconos-redes-sociales d-flex flex-wrap align-item-center justify-content-center">
        <a href="https://github.com/AgredaLuis" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
        <a href="https://www.linkedin.com/in/luis-agreda-b1a8281a2/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
        <a href="mailto:luis.agreda98@gmail.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-envelope"></i></a>
        <a href={CVLuisAgreda} target="_blank" rel="noopener noreferrer"><i className="bi bi-file-earmark-person"></i></a>
      </div>
      <div className="derechos-deautor">Creado por Luis Agreda (2023) &#169;</div>
    </footer>
  )
}

export default Footer