import React from 'react';
import herramientas from './data/tools2.json';

const Enuso = () => {
  return (
    <div>
      <div>
        <br />
        <center><h1>Lista de Herramientas en Uso</h1></center>
        <br />

        <div className="modal fade" id="edit" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Asignar Herramientas</h5>

                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">Nombre:</label>
                    <input type="text" className="form-control" id="herramientanom" disabled />
                  </div>


                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">ENCARGADO:</label>
                    <select className="form-control">
                      <option>Seleccione</option>
                      <option>ALMACEN</option>
                      <option>JOSE ALVAREZ</option>
                      <option>LUIS SOLANO</option>
                      <option>MARIO UGARTE</option>

                    </select>

                  </div>
                  <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">CANTIDAD:</label>
                    <input type="number" className="form-control" id="message-text" placeholder="Cantidad">
                    </input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message-text" className="col-form-label">FECHA:</label>
                    <input type="date" className="form-control" id="message-text" placeholder="Fecha">
                    </input>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button type="button" className="btn btn-primary">Devolver</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="mapa" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Ubicacion:</h5>

                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="map-container">
                  <iframe src="./img/H1-1.png" width="510" height="566" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                <button type="button" className="btn btn-primary">Asignar</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">

              <table id="tableID" className="display">
                <thead className="thead-dark">
                  <tr>
                    <th className="th-sm">CODIGO</th>
                    <th className="th-sm">HERRAMIENTA</th>
                    <th className="th-sm">STOCK</th>
                    <th className="th-sm">ENCARGADO</th>
                    <th className="th-sm">UBICACION</th>
                    <th className="th-sm">DEVOLVER</th>
                  </tr>
                </thead>
                <tbody>
                  {herramientas.map(herramienta => (
                    <tr key={herramienta.CODIGO}>
                      <td>{herramienta.CODIGO}</td>
                      <td>{herramienta.HERRAMIENTA}</td>
                      <td>{herramienta.STOCK}</td>
                      <td>{herramienta.ENCARGADO}</td>
                      <td><center><button type="button" className="btn btn-warning abrirmapa" value={herramienta.UBICACION}><span className="glyphicon glyphicon-edit"></span>{herramienta.UBICACION}</button></center></td>
                      <td><center><button type="button" className="btn btn-danger enuso" value={herramienta.HERRAMIENTA}><span className="glyphicon glyphicon-edit"></span>+</button></center></td>


                    </tr>
                  ))}

                </tbody>
              </table>



            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enuso;