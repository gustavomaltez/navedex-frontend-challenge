import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 2rem 3rem;

    h1 {
      font-size: 2.5rem;
      font-weight: 600;
    }

    button {
      background: #212121;
      color: #ffffff;
      padding: 0.7rem 3rem;
      cursor: pointer;

      p {
        font-size: 1.1rem;
        transition: transform 200ms;
      }

      &:hover {
        p {
          transform: translateX(0.5rem);
        }
      }
    }

    @media (max-width: 320px) {
      h1 {
        font-size: 1.8rem;
      }

      button {
        font-size: 1rem;
        padding: 0.7rem 2rem;
      }
    }
  }

  > div {
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    width: 100%;

    @media (max-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 500px) {
      grid-template-columns: 1fr;
    }
  }
`;
