import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: left;

  img {
    width: 100%;
    aspect-ratio: 1;
  }

  strong {
    margin: 0.5rem 0 0.4rem;
    font-size: 1rem;
  }

  p {
    font-size: 0.9rem;
  }

  div {
    margin-top: 0.5rem;

    svg {
      cursor: pointer;
    }

    svg + svg {
      margin-left: 0.5rem;
    }
  }
`;
