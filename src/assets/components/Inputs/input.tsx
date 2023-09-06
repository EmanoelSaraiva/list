import React from "react";
import InputStyled from "./inputStyledComponents";

interface InputProps {
  inputRef: React.RefObject<HTMLInputElement> | null;
}

const InputTarefa: React.FC<InputProps> = ({ inputRef }) => {
  return (
    <InputStyled ref={inputRef} type="text" placeholder="Adicione uma tarefa" />
  );
};

export default InputTarefa;
