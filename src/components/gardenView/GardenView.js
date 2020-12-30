import React, { useState } from 'react';
import PlantView from '../plantview/PlantView'
import PlantCard from '../plantCard/PlantCard'
import { Container, Row, Col } from 'reactstrap';

const GardenView = () => {
    const [existingGarden, setExistingGarden] = useState(true)

    return (
        <Container>
            <Row>
                <Col>
                    {existingGarden ? <PlantCard /> : <PlantView />}
                </Col>
            </Row>
        </Container>
    )

}

export default GardenView