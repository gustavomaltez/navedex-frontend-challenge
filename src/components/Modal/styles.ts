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
    width: 80%;
    max-width: 600px;
    padding: 2rem;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    text-align: center;
    position: relative;
    animation: ${({ willClose }) => (willClose ? outAnimation : inAnimation)}
      200ms;

    h1 {
      font-size: 1.5rem;
      text-align: left;
    }

    p {
      margin: 2rem 0;
      font-size: 1rem;
      text-align: left;
    }

    svg {
      position: absolute;
      right: 0.8rem;
      top: 0.8rem;
      font-size: 1.5rem;
      cursor: pointer;
    }

    div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1.5rem;
      margin-left: 30%;

      button {
        color: #212121;
        background: transparent;
        border: 1px solid #212121;
        width: 100%;
        padding: 0.4rem;
        cursor: pointer;
        font-size: 1.1rem;
      }

      button + button {
        color: #ffffff;
        background: #212121;
      }
    }
  }
`;
