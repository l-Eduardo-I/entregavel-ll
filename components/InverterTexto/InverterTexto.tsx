"use client"

import { useState } from "react";
import "./InverterTexto.css";

export default function InverterTexto () {
    const [texto, setTexto] = useState("");

    function inverterTexto () {
        const textoInvertido = texto.split("").reverse().join("");

        setTexto(textoInvertido);
    }
    
    return (
        <div className="inverterTexto">
         <input
         placeholder="Digite um texto" 
         type="text"
         value={texto}
         onChange={(event) => setTexto(event.target.value)}
         />

         <button onClick={inverterTexto}>
            inverter
         </button>
        </div>
    );
}