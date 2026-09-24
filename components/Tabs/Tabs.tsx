// permite usar recursos do navegador, sendo dependente do usuario. User Components 
"use client";

// importa o useStates - utilizamos ele para manidular o conteudo de um elemente "em resumo o valor de uma variavel"
import { useState } from "react";
import "./Tabs.css";


export default function Tabs() {
    // declara a constante que vai guardar o valor da aba selecionada, utilizando o useStates para pre definir o valor como 1.
    const [abaSelecionada, setAbaSelecionada] = useState(1);

    return (
        <div className="tabs">
            <div className="tabBotoes">
                {/*Botão com a função que, ao clicar ele envia um novo valor para a const abaselecionada, utilizando o "setAbaSelecionada(com o novo valor)"*/}
                <button onClick={() => setAbaSelecionada(1)}>
                    Tab #1
                </button>
                {/*Faz o mesmo do botão de cima, mas agora ele envia outro valor*/}
                <button onClick={() => setAbaSelecionada(2)}>
                    Tab #2
                </button>

                <button onClick={() => setAbaSelecionada(3)}>
                    Tab #3
                </button>
            </div>

            <div className="tabConteudo">

                {/*
                Se abaSelecionada for 1, mostre o que está dentro dos parênteses. isso se chama Renderização Condicional
                Ele vai verificar - abaSelecionada === 1 ?, 1 === 1, então ele executa o bloco que esta nos parênteses, 
                */}
                {abaSelecionada === 1 && (
                    <div>
                        <h3>Tab content #1</h3>
                        <p>
                            Conteúdo da primeira aba.
                        </p>
                    </div>
                )}

                {abaSelecionada === 2 && (
                    <div>
                        <h3>Tab content #2</h3>
                        <p>
                            Conteúdo da segunda aba.
                        </p>
                    </div>
                )}

                {abaSelecionada === 3 && (
                    <div>
                        <h3>Tab content #3</h3>
                        <p>
                            Conteúdo da terceira aba.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}