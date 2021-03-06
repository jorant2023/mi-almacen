import './App.css';
import herramientas from './data/tools.json';



function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="">
          <img src="https://procsman.com/wp-content/uploads/2021/10/logotype.png" width="180" height="60" alt="" />
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
            <li className="nav-item active">
              <a className="nav-link" href="./">Herramientas en ALMACEN <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./index2.html">Herramientas en USO</a>
            </li>
          </ul>

        </div>
      </nav>
      <br />
      <center><h1>Lista de Herramientas</h1></center>
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
                  <label for="recipient-name" className="col-form-label">Nombre:</label>
                  <input type="text" className="form-control" id="herramientanom" disabled/>
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
                  <th className="th-sm">ASIGNAR</th>
                </tr>
              </thead>
              <tbody>
                {herramientas.map(herramienta => (
                  <tr key={herramienta.CODIGO}>
                    <td>{herramienta.CODIGO}</td>
                    <td>{herramienta.HERRAMIENTA}</td>
                    <td>{herramienta['STOCK INICIAL']}</td>
                    <td>{herramienta.ENCARGADO}</td>
                    <td>{herramienta.UBICACION}</td>
                    <td><button type="button" className="btn btn-success edit" value={herramienta.HERRAMIENTA}><span className="glyphicon glyphicon-edit"></span>+</button></td>


                  </tr>
                ))}

              </tbody>
            </table>



          </div>
        </div>
      </div>
    </div>

  );

}


export default App;
