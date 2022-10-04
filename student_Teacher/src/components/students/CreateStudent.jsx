import React from "react"
import { useState } from 'react'

const CreateStudent = () => {

    const [name, setName] = useState(' ')
    const [course, setCourse] = useState(' ')
    const [ira, setIra] = useState(0.0)

    const handleSubmit = (event)=> {

        console.log(name)
        console.log(course)
        console.log(ira)

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