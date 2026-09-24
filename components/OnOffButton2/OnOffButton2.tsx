import "./OnOffButton2.css";

// Passa os tipos da Props
type OnOffButtonprops = {
    // fala que o componente vai ser de verdadeiro e falso
    ligado: boolean
    // apenas recebe o click do usuário
    onClick: () => void;
};

export default function OnOffButton2({ligado, onClick}: OnOffButtonprops) {
    return (
        
        <button
            // se ligado for True é "Ligado" se for false é "Desligado" assim ele pega a class certa.
            className={ligado ? "Ligado" : "Desligado"}
            
            onClick={onClick}
        >
            {/*Operação ternaria para definir ligado e desligado, com base no valor da variavel "ligado.*/}
            {ligado ? "Ligado" : "Desligado"}
        </button>
    )
}
