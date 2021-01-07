import React, { useState, useEffect } from 'react'
import { getPlants } from '../../services/plantsService'
import { Container } from 'reactstrap'
import Toolbar from '../toolbar/Toolbar'
import GardenView from '../gardenView/GardenView'
import UserLogin from '../userLogin/UserLogin'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true)
  const [toggleGardenView, setToggleGardenView] = useState(true)
  const [plantsData, setPlantsData] = useState([])

  useEffect(() => {
    getPlants()
      .then(initialPlants => {
        setPlantsData(initialPlants)
      })
      .catch(err => console.log('There was an error getting plants', err))
  }, [])



  return (
    <>
      <Toolbar plantsData={plantsData} toggleGardenView={toggleGardenView} setToggleGardenView={setToggleGardenView} loggedIn={loggedIn} />
      <Container className="App pb-5">
        {loggedIn ? <GardenView plantsData={plantsData} setPlantsData={setPlantsData} toggleGardenView={toggleGardenView} setToggleGardenView={setToggleGardenView} /> : <UserLogin />}
      </Container>
    </>
  );
}

export default App;
