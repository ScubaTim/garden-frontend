import React from 'react'
import { Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import image from '../../images/1.png'
import { remove } from '../../services/plantsService'

const PlantCard = ({ plant, plantsData, setPlantsData }) => {

    const handleRemovePlant = () => {
        remove(plant.id)
            .then(removed => removed)
            .catch(err => console.log("There was an error removing note. Error: ", err))

        setPlantsData(plantsData.filter(p => p.id !== plant.id))
    }

    return (
        <Card className="text-center m-3" style={{ width: "180px", backgroundColor: "ivory" }}>
            <Row className="px-2 pt-1">
                <Col>
                    <Button close onClick={handleRemovePlant} />
                </Col>
            </Row>
            <CardBody className="pt-0">
                <Row style={{ marginTop: "-8px" }}>
                    <Col>
                        <CardTitle tag="h4">{plant.name}</CardTitle>
                    </Col>
                </Row>
                <hr className="mt-0 p-0" />
                <CardText className="text-muted">
                    <span>Scientific name</span>
                </CardText>
                <img style={{ width: "120px" }} src={image} alt="placeholder" />
            </CardBody >
        </Card >
    )
}

export default PlantCard