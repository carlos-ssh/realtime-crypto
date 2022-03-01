import React from 'react'
import styled from '@emotion/styled'

const ResultadoDiv = styled.div`
  background-color: #f2f2f2;
  padding: 3rem;
  text-align: center;
  border-radius: 10px;
  color: #000;
  margin-top: 25px;
`;

const Parrafo = styled.p`
  font-size: 1.2rem;

  span {
    font-weight: bold;
  }
`;

const Precio = styled.p`
  font-size: 2rem;
  
  span {
    font-weight: bold;
  }
`;

const Cotizacion = ({resultado}) => {
  if (Object.keys(resultado).length === 0) return null;
  return (
    <ResultadoDiv>
      <h2>Resultado:</h2>
      <Precio>
        El precio es: <span>{resultado.PRICE}</span> <small>{resultado.LASTUPDATE}</small>
      </Precio>
      <Parrafo>
        El precio mínimo es: <span>{resultado.LOWDAY}</span><br/>
        El precio máximo es: <span>{resultado.HIGHDAY}</span>
      </Parrafo>
      <Parrafo>
        La variación es: <span>{resultado.CHANGEPCTDAY}</span>
      </Parrafo>
    </ResultadoDiv>
  );
}

export default Cotizacion;