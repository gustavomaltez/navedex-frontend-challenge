import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  main {
    position: relative;
    background: #ffffff;
    width: 70%;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    background: #fff;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 500px) {
      grid-template-columns: 1fr;

      h1 {
        font-size: 1.5rem;
      }

      strong {
        font-size: 1.2rem;
      }

      p {
        font-size: 1rem;
      }
    }

    section {
      padding: 0;
    }

    section img {
      flex: 1;
      object-fit: cover;
      aspect-ratio: 1;
      width: 100%;
      height: 100%;
    }

    section + section {
      flex: 1;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 2rem 2rem 5rem;

      svg {
        cursor: pointer;
      }

      span + span {
        margin-top: 2rem;
      }

      span p {
        margin-top: 0.5rem;
      }

      h1 {
        font-size: 2rem;
      }

      > svg {
        position: absolute;
        right: 0.8rem;
        top: 0.8rem;
        font-size: 1.5rem;
      }

      div {
        position: absolute;
        left: 2rem;
        bottom: 1.5rem;
        font-size: 1.5rem;

        svg + svg {
          margin-left: 0.8rem;
        }
      }
    }
  }
`;
