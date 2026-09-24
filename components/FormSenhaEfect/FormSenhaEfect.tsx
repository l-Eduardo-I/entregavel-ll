"use client"

import { useEffect, useState } from "react"
import "./FormSenhaEfect.css";

export default function atividade5() {
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmaSenha] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [sucesso, setSucesso] = useState(false);

    useEffect(() => {
        if (senha === "" && confirmarSenha === "") {
            setMensagem("");
            return;
        }

        if (senha === confirmarSenha) {
            setMensagem("Formulario enviado com Sucesso!");
            setSucesso(true);
        } else {
            setMensagem("As senhas precisam ser iguais!");
            setSucesso(false);
        }
    }, [senha, confirmarSenha]);

    return (
        <div className="formSenhaEffect">

            <input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
            />

            <input
                type="password"
                placeholder="Confirme a senha"
                value={confirmarSenha}
                onChange={(event) => setConfirmaSenha(event.target.value)}
            />

            <p className={sucesso ? "sucesso" : "erro"}>
                {mensagem}
            </p>

        </div>
    )
}