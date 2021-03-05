import styled, { keyframes } from 'styled-components';

const inAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
`;

const outAnimation = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to{
    opacity: 0;
    transform: translateY(50px);
  }
`;

const bgShow = keyframes`
  from {
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const bgHide = keyframes`
  from {
    opacity: 1;
  }
  to{
    opacity: 0;
  }
`;
interface Props {
  willClose: boolean;
}

export const Container = styled.div<Props>`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${({ willClose }) => (willClose ? bgHide : bgShow)} 500ms;

  main {
    position: relative;
    background: #ffffff;
    width: 70%;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    background: #fff;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    animation: ${({ willClose }) => (willClose ? outAnimation : inAnimation)}
      200ms;

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

      div > svg {
        cursor: pointer;
        transition: transform 200ms;

        &:hover {
          transform: scale(1.1);
        }

        &:first-child:hover {
          color: #e83f5b;
        }
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
        cursor: pointer;
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
