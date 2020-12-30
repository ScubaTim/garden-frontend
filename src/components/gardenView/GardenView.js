import React, { useState } from 'react';
import PlantView from '../plantview/PlantView'
import PlantCard from '../plantCard/PlantCard'
import { Container, Row, Col } from 'reactstrap';

const GardenView = (props) => {
    const [existingGarden, setExistingGarden] = useState(true)
    const gardenMapper = () => {
        props.plantsData.map((plant) => <PlantCard plant={plant} />)
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