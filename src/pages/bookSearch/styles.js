import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  color: #333;
`;

export const Input = styled.input`
  padding: 8px;
  margin-bottom: 10px;
  width: 80%;
  box-sizing: border-box;
  margin-right: 20px;
`;

export const ResultTitle = styled.h3`
  color: #333;
  margin-top: 20px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const CheckboxLabel = styled.label`
  margin-bottom: 10px;
`;

export const CheckboxInput = styled.input`
  margin-right: 5px;
`;

export const List = styled.ul`
  list-style: square;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 5px;
`;
