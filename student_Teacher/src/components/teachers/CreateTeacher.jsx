import React from "react"
import { useState } from 'react'

const CreateTeacher = () => {

    const [name, setName] = useState(' ')
    const [siape, setSiape] = useState(' ')
    const [area, setArea] = useState(' ')

    const handleSubmit = (event)=> {

        console.log(name)
        console.log(siape)
        console.log(area)

    }

    return (
        <div style={{marginTop:20}}>
            <h2> Criar Professor </h2>
            <form onSubmit={handleSubmit}>

                <div className='form-group'>
                    <label> Nome: </label>
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
                    <label> SIAPE: </label>
                    <input 
                        type='text'
                        className='form-control'
                        placeholder='Digite o SIAPE'
                        onChange={
                            (event)=>{
                                setSiape(event.target.value)
                            }
                        }
                    />
                </div>

                <div className='form-group'>
                    <label> Área: </label>
                    <input 
                        type='text'
                        step='any'
                        className='form-control'
                        placeholder='Digite a Área'
                        onChange={
                            (event)=>{
                                setArea(event.target.value)
                            }
                        }
                         />
                </div>

                <div className='form-group' style={{marginTop:15}}>
                    <input 
                        type='submit' 
                        value='Criar Professor'
                        className='btn btn-primary' 
                        />
                </div>

            </form>
        </div>
    )
}

export default CreateTeacher