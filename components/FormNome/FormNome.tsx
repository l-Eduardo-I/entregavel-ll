"use client";

// importa css e react com useStates para controlar o estado dos componentes
import { useState } from "react";
import "./FormNome.css";


export default function FormNome() {
    // fala que nome começa sem nada e vai serever do usuário
    const [nome, setNome] = useState("");
    // fala que a mensage, vai ser recebida, mas tmb começa sem nada.
    const [mensagem, setMensagem] = useState("");
    // vai validar se seu nome e falido ou nao, recebendo SUCESSO do IF
    const [sucesso, setSucesso] = useState(false);

// função com IF que valida o nome
    function validarNome() {
        // varre a variavel com oq foi digitado e compara para ver se tem mais de dois caracteres. 
        if (nome.length < 2) {
        // se não passar por essa validação, envia o texto para setMensagem e false para setSucesso, falando que não e valido
            setMensagem("O nome precisa ter pelo menos 2 caracteres");
            setSucesso(false);
        // faz quase o msm do de cima, mas agr com nome com mais de 20 carecteres, se não passar a validação, envia a mensagem e mais um false.
        } else if (nome.length > 20) {
            setMensagem("O nome precisa ter até 20 caracteres");
            setSucesso(false);
        // ultima falidação do if se chagou aqui e pq cumpre os requisitos, envia a mensegem falando isso e um True de VERDADEIRO
        } else {
            setMensagem("Formulário enviado com sucesso");
            setSucesso(true);
        }
    }

    return (
        <div className="formNome">
        {/*passa um tipo texto, mostrando o valor atual do imput */}
            <input
                type="text"
                placeholder="Digite seu nome"
                value={nome}

        /*pega o que foi digitado no input e atualiza "nome"*/
                onChange={(event) => setNome(event.target.value)}
            />
        {/*quando o batão for clicado executa a função "validarNome" */}
            <button onClick={validarNome}>
                Enviar
            </button>

        {/* de acordo com o resultado, className ganha uma class
                        se sucesso é  True       False */}
            <p className={sucesso ? "sucesso" : "erro"}>
                {mensagem}
            </p>
        </div>
    );
}