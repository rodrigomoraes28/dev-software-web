import React from "react"
import { useState, useEffect } from 'react'
//import { studentsList } from '../dadosExemplo.js'
import axios from 'axios'

const ListStudent = () => {

    const [students, setStudents] = useState([])

    useEffect(
        ()=>{
            axios.get('http://localhost:3000/students')
            .then(
                (res)=>{
                    setStudents(res.data)
                }
            )
            .catch(
                (err)=>{
                    console.log(err)
                }
            )
        }
        ,
        []
    )

    const generateTableBody = ()=> {

        return students.map(
            (element,index)=>{
                element.key = index
                return (
                    <tr>
                        <td>{element.name}</td>
                        <td>{element.course}</td>
                        <td>{element.ira}</td>
                    </tr>
                )
            }
        )
    }

    return (
        <div>
            <h1> Listar Estudante </h1>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th> Nome </th>
                        <th> Curso </th>
                        <th> IRA </th>
                    </tr>
                </thead>
                <tbody>
                    {generateTableBody()}
                </tbody>
            </table>
        </div>
    )
}

export default ListStudent