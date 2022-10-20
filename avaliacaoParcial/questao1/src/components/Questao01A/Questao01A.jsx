import React from 'react'

const Questao01A = ({nome, sobrenome, curso}) => {
    nome = 'Michel'
    sobrenome = 'Souza'
    curso = 'Redes de Computadores'
    
    return (
        <div>
            <h4> Nome: {nome} </h4> 
            <h4> Sobrenome: {sobrenome} </h4>
            <h4> Curso: {curso} </h4> 
        </div>
    )
}

export default Questao01A;