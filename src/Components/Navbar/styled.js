import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #ff0000;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  padding: 0;

  @media (max-width: 580px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Img = styled.img`
  width: 10rem;
  height: 4rem;
  padding: 0.2rem 0;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 430px) {
    flex-direction: column;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  padding: 1rem 1rem;
  transition: 200ms;

  &:hover {
    background-color: #8f0000;
  }
`;

export const LinkedPage = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`;


