import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Addresses } from './styles';
import imgAddress from '../../assets/Foto.png';

const Dashboard: React.FC = () => {
  return (
    <>
      <Title> Busca de endereço </Title>

      <Form>
        <input type="text" placeholder="Digite o CEP" />
        <button type="submit">Buscar</button>
      </Form>

      <Addresses>
        <a href="teste">
          <img src={imgAddress} alt="" />
          <div>
            <strong>Alagoinhas - BA</strong>
            <p>Rua Marechal Deodoro - Centro</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Addresses>
    </>
  );
};

export default Dashboard;
