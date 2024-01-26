import styled from "styled-components";

export const ToggleButtonStyle = styled.button`
  padding: 8px;
  background-color: ${({ selected }) => (selected ? "#3498db" : "#fff")};
  color: ${({ selected }) => (selected ? "#fff" : "#333")};
  border: 1px solid #3498db;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ selected }) => (selected ? "#2980b9" : "#ecf0f1")};
  }
`;
