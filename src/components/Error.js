import React from 'react'
import styled from '@emotion/styled'

const MensajeError = styled.p`
  background-color: #b7322c;
  color: #fff;
  padding: 1rem;
  font-weight: bold;
  font-size: 30px;
  text-transform: uppercase;
  text-align: center;
  font-family: 'Bebas Neue', cursive;
`;

const Error = ({mensaje}) => {
  return (
    <MensajeError>{mensaje}</MensajeError>
  );
}

export default Error;