import React from "react"
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateStudent = () => {

    const [name, setName] = useState(' ')
    const [course, setCourse] = useState(' ')
    const [ira, setIra] = useState(0.0)
    const navigate = useNavigate()

    const handleSubmit = (event)=> {
        event.preventDefault()
        /*console.log(name)
        console.log(course)
        console.log(ira)*/
        const newStudent = {name,course,ira}
        axios.post('http://localhost:3000/students', newStudent)
        .then(
            (res)=>{
                console.log(res.data.id)
                navigate('/listStudent')
            }
        )
        .catch(err=>console.log(err))

    }

    return (
        <div style={{marginTop:20}}>
            <h2>Criar Estudante</h2>
            <form onSubmit={handleSubmit}>

                <div className='form-group'>
                    <label>Nome: </label>
                    <input 
                        type='text'
                        className='form-control'
                        placeholder='Digite o nome'
                        onChange={
                            (event)=>{
                                setName(event.target.value)
                            }
                        }
                    />
                </div>

                <div className='form-group'>
                    <label> Curso: </label>
                    <input 
                        type='text'
                        className='form-control'
                        placeholder='Digite o curso'
                        onChange={
                            (event)=>{
                                setCourse(event.target.value)
                            }
                        }
                    />
                </div>

                <div className='form-group'>
                    <label> IRA: </label>
                    <input 
                        type='number'
                        step='any'
                        className='form-control'
                        placeholder='Digite o IRA'
                        onChange={
                            (event)=>{
                                setIra(event.target.value)
                            }
                        }
                         />
                </div>

                <div className='form-group' style={{marginTop:15}}>
                    <input 
                        type='submit' 
                        value='Criar Estudante'
                        className='btn btn-primary' 
                        />
                </div>

            </form>
        </div>
    )
}

export default CreateStudent