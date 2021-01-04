import React from 'react';
import PlantView from '../plantview/PlantView'
import PlantCard from '../plantCard/PlantCard'
import { Container, Row } from 'reactstrap';

const GardenView = ({ plantsData, setPlantsData, toggleGardenView, setToggleGardenView }) => {
    const gardenMapper = () => {
        return plantsData.map((plant) => <PlantCard key={plant.id} plant={plant} plantsData={plantsData} setPlantsData={setPlantsData} />)
    }

    if (toggleGardenView) {
        return (
            <div>
                <p style={{ color: "#ffffb5" }} className="font-weight-bold pb-3 h1">Garden View</p>
                <Container style={{ border: "3px solid #ffffb5", backgroundColor: "#99b898", borderRadius: "4px" }}>
                    <Row className="d-flex p-3 justify-content-between">
                        {gardenMapper()}
                    </Row>
                </Container>
            </div>
        )
    }

    if (!toggleGardenView) {
        return (
            <div>
                <p style={{ color: "#f3f6a3" }} className="font-weight-bold pb-3 h1">Add Plant</p>
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