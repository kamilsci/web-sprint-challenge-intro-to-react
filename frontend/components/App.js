import React, { useEffect, useState} from 'react'
import axios from 'axios'
import Character from './Character'
import { useTheme } from 'styled-components'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  const[data, setData]= useState([])
  useEffect(() => {
async function getData() {
  const [resPeople, resPlanets] = await Promise.all([axios.get(urlPeople),
    axios.get(urlPlanets)])
    let Characters = resPeople.data.map(char => {
      return {...char,homeworld: resPlanets.data.find(planet => planet.id == char.homeworld)}
    })
    setData(Characters)
}
getData()
  }, [])

  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {data.map(char => <Character key={char.id} data={char} />
    )}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
