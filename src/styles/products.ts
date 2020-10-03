import styled from 'styled-components';

export const ScreenContainer = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;

  padding-bottom: 5rem;

  background-color: #f9f8fc;

  header {
    align-self: flex-start;
    margin-top: 9rem;
    margin-left: 10.3%;
    margin-bottom: 7rem;

    font-family: 'Rambla', sans-serif;
    font-size: 6.4rem;
    font-weight: bold;

    color: #424347;

    @media (max-width: 700px) {
      align-self: center;
      margin-left: 0;
    }
  }

  a {
    justify-content: center;
    text-decoration: none;
  }
`;

export const ProductsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23.1rem, 1fr));
  justify-items: center; /*prop principal para centralizar li dentro de ul*/

  grid-row-gap: 5.3rem;

  width: 65.88%;

  font-family: 'Roboto', sans-serif;
`;

export const ProductCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 23.1rem;
  height: 33rem;

  padding: 0 5rem;

  border-radius: 5rem;
  list-style: none;

  background-color: #fff;

  :hover {
    -webkit-box-shadow: 0rem 0rem 3.5rem -0.9rem #9489ab;
    -moz-box-shadow: 0rem 0rem 3.5rem -0.9rem #9489ab;
    box-shadow: 0px 0rem 3.5rem -0.9rem #9489ab;
  }

  div.price-tag {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 3.4rem;
    left: 0rem;

    width: fit-content;
    height: 3.7rem;

    padding-right: 1.3rem;
    padding-left: 1rem;

    border-radius: 0px 1.2rem 1.2rem 0px;

    font-family: 'Roboto', sans-serif;
    font-size: 2.4rem;
    font-weight: bold;

    background-color: #e2e5ff;
    color: #8c81d0;

    span {
      margin-right: 0.4rem;
      font-size: 0.9rem;
      color: #8c8c8c;
    }
  }

  div.img-name {
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 100%;
    width: 100%;
    margin: 1.5rem 0;

    img {
      width: 100%;
      height: auto;
    }
    h3 {
      margin-top: 3rem;
      font-family: 'Roboto', sans-serif;
      font-size: 1.8rem;
      font-weight: bold;

      color: #424347;
    }
  }
`;
