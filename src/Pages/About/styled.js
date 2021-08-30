import styled from 'styled-components';

export const Img = styled.img`
  width: 18rem;
  height: 18rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 1rem;
`;


export const SocialBlock = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;

  & a {
    color: #ff0000;

    & i {
      padding: 0 0.5rem;
      font-size: 3em;
      transition: 200ms;

      &:hover {
        color: #8d0000;
      }
    }
  }
`;