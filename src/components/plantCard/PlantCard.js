import React from 'react'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import image from '../../images/1.png'

const PlantCard = ({ plant }) => {
    return (
        <Card className="text-center m-3" style={{ width: "180px", backgroundColor: "honeydew" }}>
            <CardBody>
                <CardTitle tag="h4">{plant.name}</CardTitle>
                <CardText className="text-muted">
                    <span>Scientific name</span>
                </CardText>
                <img style={{ width: "120px" }} src={image} alt="placeholder" />
            </CardBody>
        </Card>
    )
}

export default PlantCard