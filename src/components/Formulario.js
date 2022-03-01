import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color .3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Formulario = () => {

  // State para criptomoneda
  const [listaCripto, guardarCriptomonedas] = useState([]);

  const MONEDAS = [
    {codigo: 'USD', nombre: 'Dolar Americano'},
    {codigo: 'MXN', nombre: 'Peso Mexicano'},
    {codigo: 'EUR', nombre: 'Euro'},
    {codigo: 'GBP', nombre: 'Libra Esterlina'}
  ];

  const [ moneda, SelectMonedas, actualizarState ] = useMoneda('Elige tu moneda', '', MONEDAS);
  const [ criptoMoneda, SelectCripto ] = useCriptomoneda('Elige tu criptomoneda', '', listaCripto);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
      const resultado = await axios.get(url);
      guardarCriptomonedas(resultado.data.Data);
    }
    consultarAPI();
  }, []);


  return (
    <form>
      <SelectMonedas />
      <SelectCripto />
      <Boton
        type="submit"
        value="Calcular"
      />
    </form>
  );
}

export default Formulario;

