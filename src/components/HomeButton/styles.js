import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
  background-color: #007bff;
  color: #fff;

  &:hover {
    background-color: #0056b3;
  }
`;
