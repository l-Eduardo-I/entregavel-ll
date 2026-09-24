// Permite usar recursos do nevegador. Client Component.
"use client"; 

import "./OnOffButton.css";

// importa o react e o useState que permite alterar o estado de um componente. 
import React, { useState } from "react";

export default function OnOffButton () {

    // Cria as variaveis e seta elas como false padão.
    const [ligado, setLigado] = useState(false)

    return (
        <div className={ligado ? "containerv" : "containerr"}> 
            <button
                //De acordo com o valor da variavel "ligado" vincula a uma classe
                className={ligado ? "ligado" : "desligado"}

                // quando o usuário clica nesso botão ele usa setLigado para trocar o comteudo da veriavel ligado, invertendo o valor booleano que esta salvo.  
                onClick={ () => setLigado(!ligado)}
                >

                {/*operação terneria que vai comprar o que tem na variavel "Ligado" se for true = ligado, false = Desligado. */}
                {ligado ? "Ligado" : "Desligado"} 
            </button>
        </div>
    );
}
