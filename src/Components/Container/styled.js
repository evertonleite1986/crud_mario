import styled from 'styled-components';

export const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding-bottom: 1rem;
  min-height: 100vh;

  @media (max-width: 580px) {
    max-width: 80%;
  }

  @media (max-width: 430px) {
    max-width: 90%;
  }
`;