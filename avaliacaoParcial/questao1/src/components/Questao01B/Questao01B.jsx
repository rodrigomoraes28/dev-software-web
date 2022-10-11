import React from 'react'

const Questao01B = () => {
    
    let Disciplinas = ['Fundamentos de Banco de Dados', 'Redes de Comunicações Móveis', 
    'Fundamentos de Programação', 'Desenvolvimento de Software para Web', 'Sistemas Distribuídos']

    const listar = () => {
        return Disciplinas.map(
            (Disciplina, index) => {
                return(
                    <h3> {Disciplina} </h3>
                )
            }
        )
    }

    return (
        <div>
            <h2> Disciplinas: </h2>
            {listar()}
        </div>
    )
}

export default Questao01B;