import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  color: #333;
  text-align: center;
`;

export const CountText = styled.p`
  color: #555;
  text-align: center;
  font-size: 18px;
`;

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
