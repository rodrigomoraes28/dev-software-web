import React from "react"
import { useState, useEffect } from 'react'
//import { teachersList } from '../dadosExemplo.js'
import axios from 'axios'

const ListTeacher = () => {

    const [teachers, setTeachers] = useState([])

    useEffect(
        ()=>{
            axios.get('http://localhost:3000/teacher')
            .then(
                (res)=>{
                    setTeachers(res.data)
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

        return teachers.map(
            (element,index)=>{
                element.key = index
                return (
                    <tr>
                        <td>{element.name}</td>
                        <td>{element.siape}</td>
                        <td>{element.area}</td>
                    </tr>
                )
            }
        )
    }

    return (
        <div>
            <h1> Listar Professor </h1>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th> Nome </th>
                        <th> SIAPE </th>
                        <th> Área </th>
                    </tr>
                </thead>
                <tbody>
                    {generateTableBody()}
                </tbody>
            </table>
        </div>
    )
}
export default ListTeacher