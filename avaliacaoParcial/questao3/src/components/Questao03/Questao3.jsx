import axios from 'axios'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Questao03 = () => {

  const [result, setResult] = useState([])
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    try {
      async function getAllResults() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
        setResult(response.data.results)
      }
      getAllResults()
    } catch (error) {
      console.log(error)
    } 
  }, [offset])

  const GenerateTableBody = () => {
    return result.map(
        (element, index) => {
            element.key = index
            return (
                <tr>
                    <td> {element.name}</td>
                </tr>
            )
        }
    )
  }

  return (
    <div>
      <button className='btn btn-primary' onClick={() => setOffset(init => init + 10)}>
        + 10 Pokemons
      </button>

      <table className='table table-striped'>
        <thead>
            <tr>
                <th> Nome do pokemon </th>
            </tr>
        </thead>
        <tbody>
            {GenerateTableBody()}
        </tbody>
      </table>      
    </div>
  )
}

export default Questao03;