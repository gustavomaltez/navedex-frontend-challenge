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
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid #212121;
    padding: 0 2rem;
    width: 450px;
    max-width: 80vw;
    animation: ${upAnimation} 1500ms;

    div + div {
      margin-top: 2rem;
    }

    img {
      width: 70%;
      margin: 2rem 0;
    }

    button {
      margin: 2rem 0;
      background: #212121;
      color: #ffffff;
      width: 100%;
      padding: 0.7rem;
      cursor: pointer;

      p {
        font-size: 1.1rem;
        transition: transform 200ms;
      }

      &:hover {
        p {
          transform: scaleX(1.1);
        }
      }
    }
  }
`;
