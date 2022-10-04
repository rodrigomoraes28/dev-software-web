import React from "react"
import { useState } from 'react'
import { teachersList } from '../dadosExemplo.js'

const ListTeacher = () => {

    const [teachers, setTeachers] = useState(teachersList)

    const generateTableBody = ()=> {

        return teachers.map(
            (element)=>{
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