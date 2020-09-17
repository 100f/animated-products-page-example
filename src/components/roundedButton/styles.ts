import styled from 'styled-components';

export const RoundedButton = styled.button`
  width: 250px;
  height: 60px;
  background-color: #8c81d0;
  color: #fff;

  font-family: 'Roboto', sans-serif;
  font-size: 18px;

  border: none;
  border-radius: 10px;

  padding: 19px 35px;

  :hover {
    border: 2px solid #8c81d0;
    color: #8c81d0;
    background-color: #fff;
  }
`;
