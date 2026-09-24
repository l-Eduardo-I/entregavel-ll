// define essa pagina como client component.
"use client";

// importa o useState, assim podemos criar e alterar conteudo do componente.
import { useState } from "react";
import OnOffButton2 from "@/components/OnOffButton2/OnOffButton2";

export default function page () {

    // declara a variavel "ligado" e fala que ela vai começar com o valor "false" por padrão. 
    const [ligado, setLigado] = useState(false);
    
    return (
        <main className={ligado ? "containerv" : "containerr"}>
            {/*Chama o componente*/}
            <OnOffButton2
                // Enviano para o componente uma props com o valor referente a variavel "ligado" 
                ligado={ligado}
                // Envia a função de setligado, invertendo seu valor booleano. 
                onClick={() => setLigado(!ligado)}
            />
        </main>
    );
}   