import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 500px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  input {
    height: 60px;
    width: 100%;
    border: 0;
    border-radius: 5px;
    text-align: ;
    padding-left: 16px;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: bold;
    color: #a3a3a3;

    &::placeholder {
      color: #a8a8b3;
      font-size: 16px;
    }

    &:focus {
      border: 5px solid #ffe70b;
    }

    & + input {
      margin-top: 16px;
    }
  }

  button {
    width: 100%;
    padding: 18px;
    border: 0;
    border-radius: 10px;
    background: #ffe70b;
    font-weight: bold;
    transition: background-color 0.2s, color 0.4s;
    margin: 20px 0 16px 0;

    &:hover {
      background: ${shade(0.2, '#ffe70b')};
      color: #fff;
    }
  }
`;

export const Addresses = styled.div`
  margin-top: 80px;
  max-width: 500px;

  section {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + section {
      margin-top: 16px;
    }
    &:hover {
      transform: translate(25px, -10px);
    }
  }

  img {
    width: 60px;
    height: 64px;
    opacity: 0.8;
  }

  div {
    margin-left: 20px;
    flex: 1;

    strong {
      font-size: 22px;
      color: #3d3d4d;
    }

    p {
      font-size: 20px;
      color: #a8a883;
      margin-top: 4px;
    }
  }

  svg {
    margin-left: auto;
    color: #cbcbd6;
  }

  small {
    font-size: 16px;
    color: #a8a883;
  }
`;
