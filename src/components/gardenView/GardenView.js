import React, { useState } from 'react';
import PlantView from '../plantview/PlantView'
import PlantCard from '../plantCard/PlantCard'
import { Container, Row } from 'reactstrap';

const GardenView = ({ plantsData }) => {
    const [existingGarden, setExistingGarden] = useState(true)

    const gardenMapper = () => {
        return plantsData.map((plant) => <PlantCard key={plant._id} plant={plant} />)
    }

    return (
        <div>
            <span style={{ color: "#f3f6a3" }} className="font-weight-bold h4">Garden View</span>
            <Container style={{ border: "3px solid khaki", borderRadius: "4px" }}>
                <Row className="d-flex p-3 justify-content-between">
                    {existingGarden ? gardenMapper() : <PlantView />}
                </Row>
            </Container>
        </div>
    )

}

export default GardenView