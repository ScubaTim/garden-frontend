import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from 'reactstrap'
import Toolbar from '../toolbar/Toolbar'
import GardenView from '../gardenView/GardenView'
import UserLogin from '../userLogin/UserLogin'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true)
  const [plantsData, setPlantsData] = useState([])

  useEffect(() => {
    axios
      .get("/plants")
      .then(response => {
        setPlantsData(response)
      })
      .catch(err => console.log('error getting data', err))
  })
  console.log(plantsData)

  return (
    <>
      <Toolbar />
      <Container className="App">
        {loggedIn ? <GardenView /> : <UserLogin />}
        {plantsData}
      </Container>
    </>
  );
}

export default App;
