import React from 'react'

const Questao01B = () => {
    
    let Disciplinas = ['Análise de Desempenho em Redes de Computadores', 'Redes de Comunicações Móveis', 
    'Projeto de Pesquisa Científica e Tecnológica', 'Desenvolvimento de Software para Web', 'Sistemas Distribuídos']

    const listar = () => {
        return Disciplinas.map(
            (Disciplina, index) => {
                return(
                    <h4> {Disciplina} </h4>
                )
            }
        )
    }

    return (
        <div>
            <h3> Disciplinas: </h3>
            {listar()}
        </div>
    )
}

export default Questao01B;