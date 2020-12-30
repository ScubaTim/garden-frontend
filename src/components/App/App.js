import React, { useState, useEffect } from 'react'
import { getPlants } from '../../services/plantsService'
import { Container } from 'reactstrap'
import Toolbar from '../toolbar/Toolbar'
import GardenView from '../gardenView/GardenView'
import UserLogin from '../userLogin/UserLogin'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true)
  const [plantsData, setPlantsData] = useState([])

  useEffect(() => {
    getPlants()
      .then(initialPlants => {
        setPlantsData(initialPlants)
      })
      .catch(err => console.log('There was an error getting plants', err))
  }, [])

  //console.log('App level', plantsData)

  return (
    <>
      <Toolbar plantsData={plantsData} />
      <Container className="App">
        {loggedIn ? <GardenView plantsData={plantsData} setPlantsData={setPlantsData} /> : <UserLogin />}
      </Container>
    </>
  );
}

export default App;
