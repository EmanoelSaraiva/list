import React from "react";
import ButtonStyled from "./ButtonsStyledComponents";

interface ButtonsProps {
  titulo: string;
  action: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({ action, titulo }) => {
  return <ButtonStyled onClick={action}>{titulo}</ButtonStyled>;
};

export default Buttons;
