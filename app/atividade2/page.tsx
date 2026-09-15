"use client";

import { useState } from "react";
import OnOffButton2 from "@/components/OnOffButton2/OnOffButton2";

export default function page () {

    // declara uma variavel que nao sera atribuida no começo com o useState
    const [ligado, setLigado] = useState(false);
    
    return (
        <main>
            <OnOffButton2
                ligado={ligado}
                // recebe o clic e inverte o booleano de false para verdadeiro
                onClick={() => setLigado(!ligado)}
            />
        </main>
    );
}