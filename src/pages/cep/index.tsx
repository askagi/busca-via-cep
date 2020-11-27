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

const Cep: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>([]);

  const [newCity, setNewCity] = useState('');
  const [newUf, setNewUf] = useState('');
  const [newStreet, setNewStreet] = useState('');

  async function handleAddAddress(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    const response = await api.get<Address[]>(
      `${newUf}/${newCity}/${newStreet}/json`,
    );

    // const address = [...response.data];
    setAddresses([...addresses, ...response.data]);

    // const address = response.data;
    // setAddresses([...addresses, address]);
    // console.log(response.data);
  }

  return (
    <>
      <Title> Busca de Cep </Title>
      <Form onSubmit={handleAddAddress}>
        <input
          value={newCity}
          onChange={e => setNewCity(e.target.value)}
          type="text"
          placeholder="cidade"
        />
        <input
          value={newUf}
          onChange={e => setNewUf(e.target.value)}
          type="text"
          placeholder="UF"
        />
        <input
          value={newStreet}
          onChange={e => setNewStreet(e.target.value)}
          type="text"
          placeholder="rua"
        />

        <button type="submit">Buscar</button>
      </Form>

      <Addresses>
        {addresses.map(
          ({ cep, logradouro, bairro, localidade, uf }: Address) => (
            <section key={cep}>
              <img src={imgAddress} alt="Location icon" />
              <div>
                <strong>{cep}</strong>
                <p>
                  {logradouro}
                  {' - '}
                  {bairro}
                </p>
                <small>
                  {localidade}
                  {' - '}
                  {uf}
                </small>
              </div>

              <FiChevronRight size={20} />
            </section>
          ),
        )}
      </Addresses>
    </>
  );
};

export default Cep;
