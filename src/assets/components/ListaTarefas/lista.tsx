// import React from "react";
import Tarefa from "../../../types/Tarefa";
import Buttons from "../Buttons/buttons";
import InputStyled from "../Inputs/inputStyledComponents";

interface ListaProps {
  tarefas: Tarefa[];
  action: (index: number) => void;
  tarefaEditando: number | null;
  novoValor: string;
  setNovoValor: (valor: string) => void;
  salvarEdicao: () => void;
  marcarComoConcluida: (index: number) => void;
}

function Lista({
  tarefas,
  action,
  tarefaEditando,
  novoValor,
  setNovoValor,
  salvarEdicao,
  marcarComoConcluida,
}: ListaProps) {
  return (
    <ul>
      {tarefas.map((tarefa, index) => (
        <li
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
          }}
          key={index}
        >
          {tarefa.concluida ? (
            <s>{tarefa.texto}</s>
          ) : (
            <>
              {tarefaEditando === index ? (
                <div>
                  <InputStyled
                    type="text"
                    value={novoValor}
                    onChange={(e) => setNovoValor(e.target.value)}
                  />
                  <Buttons action={salvarEdicao} titulo="Salvar" />
                </div>
              ) : (
                <>
                  {tarefa.texto}
                  {!tarefa.concluida && (
                    <>
                      <Buttons action={() => action(index)} titulo="Editar" />
                      <Buttons
                        action={() => marcarComoConcluida(index)}
                        titulo="Concluida"
                      />
                    </>
                  )}
                </>
              )}
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Lista;
