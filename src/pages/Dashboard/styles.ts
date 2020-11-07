import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 500px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    border: 0;
    border-radius: 5px 0 0 5px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #a3a3a3;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 220px;
    height: 70px;
    border: 0;
    border-radius: 0px 10px 10px 0px;
    background: #ffe70b;
    font-weight: bold;
    transition: background-color 0.2s, color 0.4s;

    &:hover {
      background: ${shade(0.2, '#ffe70b')};
      color: #fff;
    }
  }
`;

export const Addresses = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%100px;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;
  }

  & + a {
    margin-top: 16px;
  }

  &:hover {
    transform: translateX(10px);
  }

  img {
    width: 60px;
    height: 64px;
    opacity: 0.8;
  }

  div {
    margin-left: 20px;

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #a8a883;
      margin-top: 4px;
    }
  }

  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
`;
