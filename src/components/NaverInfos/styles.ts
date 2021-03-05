import styled, { keyframes } from 'styled-components';

const upAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  width: 50vw;
  margin: 3rem auto;
  animation: ${upAnimation} 800ms;

  @media (max-width: 900px) {
    width: 90vw;
  }

  section {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1rem 0;

    svg {
      margin: 0 0.5rem 0 -0.5rem;
      font-size: 1.5rem;
      cursor: pointer;
    }

    h1 {
      font-size: 1.5rem;
    }
  }
  form {
    position: relative;

    > div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1rem;

      @media (max-width: 430px) {
        grid-template-columns: 1fr;
      }
    }

    button {
      position: absolute;
      right: 0;
      margin: 2rem 0;
      background: #212121;
      color: #ffffff;
      width: 30%;
      padding: 0.7rem;
      cursor: pointer;
      font-size: 1.1rem;

      @media (max-width: 400px) {
        width: 100%;
      }
    }
  }
`;
