import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem 3rem;

  img {
    width: 10%;
    min-width: 100px;
  }

  button {
    font-weight: 600;
    background: transparent;
    font-size: 1rem;
  }
`;
