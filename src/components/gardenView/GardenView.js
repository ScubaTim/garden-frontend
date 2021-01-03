import React from 'react';
import PlantView from '../plantview/PlantView'
import PlantCard from '../plantCard/PlantCard'
import { Container, Row } from 'reactstrap';

const GardenView = ({ plantsData, setPlantsData, toggleGardenView, setToggleGardenView }) => {
    console.log('plantsData', plantsData)
    const gardenMapper = () => {
        return plantsData.map((plant) => <PlantCard key={plant.id} plant={plant} plantsData={plantsData} setPlantsData={setPlantsData} />)
    }

    if (toggleGardenView) {
        return (
            <div className="pb-4">
                <span style={{ color: "#f3f6a3" }} className="font-weight-bold h1">Garden View</span>
                <Container style={{ border: "3px solid khaki", backgroundColor: "white", borderRadius: "4px" }}>
                    <Row className="d-flex p-3 justify-content-between">
                        {gardenMapper()}
                    </Row>
                </Container>
            </div>
        )
    }

    if (!toggleGardenView) {
        return (
            <div className="pb-5">
                <span style={{ color: "#f3f6a3" }} className="font-weight-bold h1">Add Plant</span>
                <Container style={{ border: "3px solid khaki", borderRadius: "4px" }}>
                    <Row className="d-flex p-0 justify-content-between">
                        <PlantView plantsData={plantsData} setPlantsData={setPlantsData} toggleGardenView={toggleGardenView} setToggleGardenView={setToggleGardenView} />
                    </Row>
                </Container>
            </div>
        )
    }





}

export default GardenView