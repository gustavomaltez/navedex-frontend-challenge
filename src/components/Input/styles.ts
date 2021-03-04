import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #212121;

  label {
    font-weight: bold;
    margin-bottom: 0.3rem;
    font-size: 1.1rem;
  }

  input {
    background: #ffffff;
    border: 1px solid #424242;
    height: 40px;
    flex: 1;
    padding: 0.5rem;
    font-size: 1rem;
    ::placeholder {
      color: #9e9e9e;
    }
  }
`;
