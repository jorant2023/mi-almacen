import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src="https://procsman.com/wp-content/uploads/2021/10/logotype.png" 
          width="180" height="60" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Herramientas en ALMACEN</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/enuso">Herramientas en USO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/mapa">Mapa del Almacen</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" 
              role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Incidencias
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/reportar">Reportar Incidencia</a>
                <a className="dropdown-item" href="/records">Ver Registros</a>
                </div>
            </li>
          </ul>

        </div>
      </nav>

    </div>
  );
};

export default Navbar;
