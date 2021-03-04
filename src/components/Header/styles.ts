import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem 3rem;

  button:first-child {
    cursor: pointer;
    width: 20vw;
    max-width: 200px;
    background: transparent;
  }

  img {
    width: 100%;
  }

  button + button {
    font-weight: 600;
    background: transparent;
    font-size: 1rem;
    cursor: pointer;
  }
`;
