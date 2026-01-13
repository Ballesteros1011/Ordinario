import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,capital,currencies,languages,population"
    )
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  return (
    <div>
      <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <div class="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3"><h1>Lista de paises en todo el Mundo</h1></div>
    
  </div>
</nav>
      

      <table className='table table-bordered border-$teal-500 '
        border="20"
        cellPadding="8"
        cellSpacing="0"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          
          <tr >
            
            <th>BANDERA</th>
            <th>PAIS</th>
            <th>CAPITAL</th>
            <th>POBLACION</th>
            <th>MONEDA OFICIAL</th>
            <th>IDIOMA OFICIAL</th>
          </tr>
        </thead>

        <tbody>
          {countries.map((country, index) => {
            let moneda = "No tiene"
            let idiomas = "No tiene"

            if (
              country.currencies &&
              Object.values(country.currencies).length > 0 &&
              Object.values(country.currencies)[0].name
            ) {
              moneda = Object.values(country.currencies)[0].name
            }

            if (
              country.languages &&
              Object.values(country.languages).length > 0
            ) {
              idiomas = Object.values(country.languages).join(", ")
            }

            return (
              <tr key={index}>
                <td>
                  <img
                    src={country.flags.png}
                    alt={country.name.common}
                    width="60"
                    
                  />
                </td>

                <td>{country.name.common}</td>

                <td>
                  {country.capital ? country.capital[0] : "No tiene"}
                </td>

                <td>{country.population}</td>

                <td>{moneda}</td>

                <td>{idiomas}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}



export default App
