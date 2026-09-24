"use client";

import { useState } from "react";
import "./FormSenhaRender.css";

export default function atividade6 () {
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");

    let mensagem = "";
    let sucesso = false;

    if ( senha !== "" || confirmaSenha !== "") {
        if (senha === confirmaSenha ) {
            mensagem = "Formulario enviado!";
            sucesso = true;
    }else {
        mensagem = "As senhas devem ser iguais!";
        sucesso = false;
        }
    }

    return (
        <div className="formaSenhaRender">
            <input 
                type="password"
                placeholder="Digite sua senha"
                value={senha} 
                onChange={(event) => setSenha(event.target.value)}
            />

            <input 
                type="password"
                placeholder="confirme sua senha"
                value={confirmaSenha}
                onChange={(event) => setConfirmaSenha(event.target.value)}
            />

            <p className={sucesso ? "sucesso" : "erro"}>
                {mensagem}
            </p>

        </div>
    );
}