import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import imagen from './assets/images/img1.png';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media(min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 7rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66adfe;
    display: block;
  }
`;

function App() {

  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState('');

  useEffect(() => {
    // Evita la ejecucion del codigo si no hay una moneda
    if (moneda === '') return;
    
  }, [moneda, criptomoneda]);

  return (
    <Contenedor>
      <div>
        <Imagen
          src={imagen}
          alt="Crypto Imagen"
        />
      </div>
      <div>
        <Heading>
          Cotiza ya!
        </Heading>
        <Formulario
          guardarMoneda={guardarMoneda}
          guardarCripto={guardarCriptomoneda}
        />
      </div>
    </Contenedor>
  );
}

export default App;
