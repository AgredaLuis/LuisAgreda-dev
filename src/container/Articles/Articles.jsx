import React from "react";
import "./Articles.scss";

const Articles = () => {
  return (
    <section className="articulos justify-content-start">
      <h2 className="seccion-titulo texto-negro">Articulos</h2>
      {/* style={{width: "20rem"}} */}
      <div className="card" >
        <div className="card-header">Mas recientes</div>
        <ul className="list-group list-group-flush">
          <a href="" target="_blank" rel="noopener noreferrer">
            <li className="list-group-item">
              Esto es yun ejemplo de sintaxxis
            </li>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <li className="list-group-item">Estructura ded Datos en C++</li>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <li className="list-group-item">Ejercicio de useHook como useState , useEffect , useRef y BroserRoute</li>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <li className="list-group-item">Como escribir en un archivo</li>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <li className="list-group-item">Para que usar Lua</li>
          </a>
        </ul>
      </div>
    </section>
  );
};

export default Articles;
