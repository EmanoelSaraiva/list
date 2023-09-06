import { styled } from "styled-components";

const InputStyled = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #007bff;
  }
`;

export default InputStyled;
