"use client";

import { useState } from "react";
import "./FormSenha.css";

export default function FormSenha() {
    // salva a senha na variavel const, useStates define ela como vazia por padrão;
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [mensagem, setMensagem] = useState("");
    // guarda se a senha foi salva com sucesso ou nao, armazena false e True para isso. 
    const [sucesso, setSucesso] = useState(false);

    function validarSenhas() {
        if (senha === confirmarSenha) {
            setMensagem("enviado com sucesso!!");
            setSucesso(true);
        } else {
            setMensagem("A senha deve ser igual!!");
            setSucesso(false);
        }
    }
    return (
        <div className="formSenha">
            <input
                type="password"
                placeholder="Digite uma senha"
                Value={senha}
                onChange={(event) => setSenha(event.target.value)}
            />

            <input
                type="password"
                placeholder="Confirme sua senha"
                Value={confirmarSenha}
                onChange={(event) => setConfirmarSenha(event.target.value)}
            />

            <button onClick={validarSenhas}>
                ENVIAR
            </button>

            <p className={sucesso ? "sucesso" : "erro"}>
                {mensagem}
            </p>
        </div>
    );
}

