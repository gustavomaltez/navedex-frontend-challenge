import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
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
      margin: 2rem 0;
      background: #212121;
      color: #ffffff;
      padding: 0.7rem 3rem;
      cursor: pointer;
      font-size: 1.1rem;
    }
  }
`;
