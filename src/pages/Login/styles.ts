import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #212121;
    padding: 1.5rem;
    min-width: 450px;
    min-height: 400px;

    img {
      width: 230px;
      height: 60px;
    }
  }
`;
