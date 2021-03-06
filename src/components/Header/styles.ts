import styled, { keyframes } from 'styled-components';

const shake = keyframes`
  0% {
        transform: rotateY(10deg) rotateZ(1deg);
  }
  50% {
      transform: rotateY(-10deg) rotateZ(-1deg);
  }
  100% {
      transform: rotateY(10deg) rotateZ(1deg);
  }
`;

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem 3rem;

  button:first-child {
    width: 20vw;
  }

  button {
    cursor: pointer;
    max-width: 200px;
    background: transparent;
  }

  img {
    width: 100%;

    &:hover {
      animation: ${shake} 1000ms infinite;
    }
  }

  button + button {
    font-weight: 600;
    background: transparent;
    font-size: 1rem;
    cursor: pointer;
    transition: transform 200ms;

    @media (max-width: 500px) {
      width: 20vw;
      font-size: 1.5rem;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
`;
