import React, { Fragment, useState } from 'react';
import Styled from '@emotion/styled';

const Label = Styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 2rem;
  display: block;
`;

const Select = Styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useMoneda = (label, stateInicial, opciones) => {

  const [state, actualizarState] = useState(stateInicial);

  const Seleccionar = () =>(
    <Fragment>
      <Label>{label}</Label>
      <Select
        onChange={e => actualizarState(e.target.value)}
        value={state}
      >
        <option>-- Selecciona --</option>
        {opciones.map(opcion => (
          <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
        ))}
      </Select>
    </Fragment>
  );

  return [ state, Seleccionar, actualizarState ];
}

export default useMoneda;