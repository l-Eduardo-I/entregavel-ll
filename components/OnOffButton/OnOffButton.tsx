"use client";

import "./OnOffButton.css";
// importa o react e o useState que usamos para controlar estados do componente no casa ligado e desligado
import React, { useState } from "react";

export default function OnOffButton () {

    // Cria as variaveis e seta eas como false padão.
    const [ligado, setLigado] = useState(false)

    return (
        <button
            //De acordo com a resposta do IF ele vinculo a uma classe
            className={ligado ? "ligado" : "desligado"}
            onClick={ () => setLigado(!ligado)}
            >
            {/*if que pergunta se o botão foi clicado ou não*/}
            {ligado ? "Ligado" : "Desligado"} 
        </button>
    );
}