import { useState } from "react";

function VotaCidades() {
    const [votoQuixada, setvotoQuixada] = useState(0);

    const [votoLimoeiro, setvotoLimoeiro] = useState(0);

    const [votoCrateus, setvotoCrateus] = useState(0);

    const votarQuixada = () => {
        setvotoQuixada(votoQuixada + 1);
    };

    const votarLimoeiro = () => {
        setvotoLimoeiro(votoLimoeiro + 1);
    };

    const votarCrateus = () => {
        setvotoCrateus(votoCrateus + 1);
    };

    const mostrarVencedor = () => {
        if (votoQuixada > votoCrateus && votoQuixada > votoLimoeiro) {
                alert("Quixadá foi a cidade mais votada!")
        } else if (votoCrateus > votoQuixada && votoCrateus > votoLimoeiro) {
                alert("Cratéus foi a cidade mais votada!")
        } else if (votoLimoeiro > votoQuixada && votoLimoeiro > votoCrateus) {
                alert("Limoeiro do Norte foi a cidade mais votada!")
        } else {
                alert("Duas ou mais cidades empataram em quantidade de votos!")
        }
        // eslint-disable-next-line no-const-assign
        setvotoQuixada(0);
        // eslint-disable-next-line no-const-assign
        setvotoLimoeiro(0);
        // eslint-disable-next-line no-const-assign
        setvotoCrateus(0);
    }
    return (
        <div>
            <div>
                <h2>Quixadá: {votoQuixada}</h2>
                <h2>Limoeiro do Norte: {votoLimoeiro}</h2>
                <h2>Crateús: {votoCrateus}</h2>
            </div>
            <div>
                <button onClick={votarQuixada}>Votar Quixadá</button>
                <button onClick={votarLimoeiro}>Votar Limoeiro do Norte</button>
                <button onClick={votarCrateus}>Votar Crateús</button>
            </div>
            <div>
                <button onClick={mostrarVencedor}> Encerrar votação e mostrar vencedora </button> 
            </div>
        </div>
    );
}
export default VotaCidades;