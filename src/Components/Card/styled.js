import styled from 'styled-components';

export const CardArea = styled.div`
  background-color: #120a8f;
  padding: 1rem;
  border-radius: 15px;
  margin: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  height: 23rem;
  overflow: hidden;
  transition: all 0.7s;

  &:hover {
    -webkit-filter: drop-shadow(15px 7px 1px rgba(0,0,0,.5));
    filter: drop-shadow(15px 7px 1px rgba(0,0,0,.5));
    -webkit-transform: rotateZ(-360deg) scale(1.2);
    transform: rotateZ(-360deg) scale(1.2);
  }
`;

export const CardImg = styled.img`
  width: 15rem;
  height: 18rem;
  object-fit: cover;
`;

export const Name = styled.h3`
  color: #ff0000;
  text-align: center;
  padding: 0.5rem;
  font-size: 1.5em;
`;