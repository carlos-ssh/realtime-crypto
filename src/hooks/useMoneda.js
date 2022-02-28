import React, { Fragment, useState } from 'react';

const useMoneda = (label, stateInicial, opciones) => {

  const [state, actualizarState] = useState(stateInicial);

  const Seleccionar = () =>(
    <Fragment>
      <label>
        <label>{label}</label>
        <select>
          <option value="">- Selecciona -</option>
          { opciones.map(opcion => (
            <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
          ))}
        </select>
      </label>
    </Fragment>
  );

  return [ state, Seleccionar, actualizarState ];
}

export default useMoneda