import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import { Title, Form, Addresses } from './styles';
import imgAddress from '../../assets/Foto.png';

interface Address {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

const Dashboard: React.FC = () => {
  const [newAddress, setNewAddress] = useState('');
  const [addresses, setAddresses] = useState<Address[]>([]);

  async function handleAddAddress(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get<Address>(`${newAddress}/json`);

    const address = response.data;

    setAddresses([...addresses, address]);
  }

  return (
    <>
      <Title> Busca de endereço </Title>

      <Form onSubmit={handleAddAddress}>
        <input
          value={newAddress}
          onChange={e => setNewAddress(e.target.value)}
          type="text"
          placeholder="Digite o CEP"
        />
        <button type="submit">Buscar</button>
      </Form>

      <Addresses>
        {addresses.map(address => (
          <a key={address.cep} href="teste">
            <img src={imgAddress} alt="Location icon" />
            <div>
              <strong>
                {address.localidade}
                {' - '}
                {address.uf}
              </strong>
              <p>
                {address.logradouro}
                {' - '}
                {address.bairro}
              </p>
              <small>{address.cep}</small>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Addresses>
    </>
  );
};

export default Dashboard;
