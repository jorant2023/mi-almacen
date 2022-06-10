import React from 'react';

const Incidencias = () => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h3>Registro de Incidencias</h3>
              </div>
              <div class="card-body">

                <div class="form-group">
                  <label for="">ENCARGADO</label>
                  <input type="text" name="nombre" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="">FECHA</label>
                  <input type="date" className="form-control" id="message-text" placeholder="Fecha">
                  </input>
                </div>
                <div class="form-group">
                  <label for="">CODIGO HERRAMIENTA</label>
                  <input type="text" name="telefono" class="form-control" />
                </div>


                <div class="form-group">
                  <label for="">COMENTARIOS</label>
                  <textarea name="reclamo" class="form-control" cols="30" rows="4"></textarea>
                </div>
                <div class="form-group">
                  <button class="btn btn-primary btn-block">Registrar</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Incidencias;