import axios from "axios"
import { useEffect, useState } from "react"

const Questao04 = () => {

  const [countries, setCountries] = useState([])

  useEffect(
    () => {
      axios.get("https://restcountries.com/v2/region/africa?fields=name,population")
        .then(
          (res) => {
            setCountries(res.data)
          }
        ).catch(
          (err) => {
            console.log(err)
          }
        )
    }, []
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
                    <h3> Maior População</h3>
                    {largerPopulation}
                </li>
                <li>
                    <h3> Nome do País</h3>
                    {largerName}
                </li>
            </ul>
     )
  }

  return (
    <div>
        {getLargerPopulation()}
    </div>

  )

}

export default Questao04;