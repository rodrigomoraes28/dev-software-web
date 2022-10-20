import axios from "axios"
import { useEffect, useState } from "react"

const Questao05 = () => {

  const [countries, setCountries] = useState([])
  const [continent, setContinent] = useState('africa')

  useEffect(
    () => {
      axios.get(`https://restcountries.com/v2/region/${continent}?fields=name,population`)
        .then(
          (res) => {
            setCountries(res.data)
          }
        ).catch(
          (err) => {
            console.log(err)
          }
        )
    }, [continent]
  )

  const getLargerPopulation = () => {

    let largerPopulation = 0
    let largerName = ' '
    countries.forEach((country) => {
      if (country.population > largerPopulation) {
        largerPopulation = country.population
        largerName = country.name
      }
    })
     return(
            <ul>
                <li>
                    <h4> Maior População</h4>
                    {largerPopulation}
                </li>
                <li>
                    <h4> Nome do País</h4>
                    {largerName}
                </li>
            </ul>
     )
  }

  const getSmallerPopulation = () => {

    let smallerPopulation = 0
    let smallerName = ' '
    countries.forEach((country, index) => {
        if (index === 0) {
            smallerPopulation = country.population
        }

        if (country.population < smallerPopulation) {
            smallerPopulation = country.population
            smallerName = country.name
        }
    })
     return(
            <ul>
                <li>
                    <h4> Menor População</h4>
                    {smallerPopulation}
                </li>
                <li>
                    <h4> Nome do País</h4>
                    {smallerName}
                </li>
            </ul>
     )
  }

  const getResult = () => {
    if (continent === 'americas') {
        return getLargerPopulation()
    } else {
        return getSmallerPopulation()
    }
  }

  return (
    <div>
        <h4> Escolha uma região clicando em um dos botôes abaixo </h4>
        <button className="btn btn-info" style={{ marginRight : 15}} onClick={(event) => {setContinent('americas')}}> Americas </button>
        <button className="btn btn-info" onClick={(event) => {setContinent('asia')}}> Asia </button>
        {getResult()}
    </div>

  )

}

export default Questao05;