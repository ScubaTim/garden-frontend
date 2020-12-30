import React, { useState } from 'react';
import PlantView from '../plantview/PlantView'
import PlantCard from '../plantCard/PlantCard'
import { Container, Row, Col } from 'reactstrap';

const GardenView = ({ plantsData }) => {
    const [existingGarden, setExistingGarden] = useState(true)

    const gardenMapper = () => {
        return plantsData.map((plant) => <PlantCard key={plant._id} plant={plant} />)
    }

    return (
        <Container>
            <Row>
                <Col>
                    {existingGarden ? gardenMapper() : <PlantView />}
                </Col>
            </Row>
        </Container>
    )

}

export default GardenView