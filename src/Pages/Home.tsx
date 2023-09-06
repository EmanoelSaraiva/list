import React, { useRef, useState, useEffect } from "react";
import Buttons from "../assets/components/Buttons/buttons";
import InputTarefa from "../assets/components/Inputs/input";
import Tarefa from "../types/Tarefa";
import Lista from "../assets/components/ListaTarefas/lista";

function Home() {
  const [tarefasPendentes, setTarefasPendentes] = useState<Tarefa[]>(() =>
    JSON.parse(localStorage.getItem("tarefasPendentes") || "[]")
  );
  const [tarefasConcluidas, setTarefasConcluidas] = useState<Tarefa[]>(() =>
    JSON.parse(localStorage.getItem("tarefasConcluidas") || "[]")
  );

  const [tarefaEditando, setTarefaEditando] = useState<number | null>(null);
  const [novoValor, setNovoValor] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    localStorage.setItem("tarefasPendentes", JSON.stringify(tarefasPendentes));
    localStorage.setItem(
      "tarefasConcluidas",
      JSON.stringify(tarefasConcluidas)
    );
  }, [tarefasPendentes, tarefasConcluidas]);

  const handleClick = () => {
    if (inputRef.current === null) {
      console.log("Está nulo");
    } else {
      const valorInput = inputRef.current.value;

      const novaTarefa: Tarefa = {
        texto: valorInput,
        concluida: false,
      };
      setTarefasPendentes([...tarefasPendentes, novaTarefa]);
      inputRef.current.value = "";
    }
  };

  const alternaEstado = (index: number) => {
    setTarefaEditando(index);
    setNovoValor(tarefasPendentes[index].texto);
  };

  const salvarEdicao = () => {
    if (tarefaEditando !== null) {
      const tarefasAtualizadas = [...tarefasPendentes];
      tarefasAtualizadas[tarefaEditando] = {
        texto: novoValor,
        concluida: tarefasPendentes[tarefaEditando].concluida,
      };
      setTarefasPendentes(tarefasAtualizadas);

      setTarefaEditando(null);
      setNovoValor("");
    }
  };

  const marcarComoConcluida = (index: number) => {
    if (tarefasPendentes[index]) {
      const tarefaConcluida = tarefasPendentes[index];
      tarefaConcluida.concluida = true;

      setTarefasConcluidas([...tarefasConcluidas, tarefaConcluida]);
      setTarefasPendentes(tarefasPendentes.filter((_, i) => i !== index));
    }
  };

  return (
    <>
      <h1>Lista de Tarefas</h1>
      <InputTarefa inputRef={inputRef} />
      <Buttons titulo="Adicionar" action={handleClick} />
      <h2>Tarefas Pendentes</h2>
      <Lista
        tarefas={tarefasPendentes}
        action={alternaEstado}
        tarefaEditando={tarefaEditando}
        novoValor={novoValor}
        setNovoValor={setNovoValor}
        salvarEdicao={salvarEdicao}
        marcarComoConcluida={marcarComoConcluida}
      />
      <h2>Tarefas Concluídas</h2>
      <Lista tarefas={tarefasConcluidas} action={() => {}} />
    </>
  );
}

export default Home;
