import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Menu = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
  }

  li {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
    font-size: 16px;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #007bff;
      color: #fff;
    }
  }
`;
