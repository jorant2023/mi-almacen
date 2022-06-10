import React from 'react';
import records from '../data/records.json';


const Record = () => {
    return (
        <div>
            <div className="container">
        <div className="row">
          <div className="col-md-12">

            <table id="tableID" className="display">
              <thead className="thead-dark">
                <tr>
                  <th className="th-sm">CODIGO</th>
                  <th className="th-sm">ENCARGADO</th>
                  <th className="th-sm">FECHA</th>
                  <th className="th-sm">COMENTARIOS</th>
                </tr>
              </thead>
              <tbody>
                {records.map(records => (
                  <tr key={records.CODIGO}>
                    <td>{records.CODIGO}</td>
                    <td>{records.ENCARGADO}</td>
                    <td>{records.FECHA}</td>
                    <td>{records.COMENTARIOS}</td>
                    

                  </tr>
                ))}

              </tbody>
            </table>



          </div>
        </div>
      </div>
        </div>
    );
};

export default Record;