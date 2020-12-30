import React from 'react'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import image from '../../images/1.png'

const PlantCard = ({ plant }) => {
    console.log('plantCard', plant)
    return (
        <Card className="text-center my-5 mx-2" style={{ width: "200px" }}>
            <CardBody>
                <CardTitle tag="h4">{plant.name}</CardTitle>
                <CardText className="text-muted">
                    <span>Scientific name</span>
                </CardText>
                <img style={{ width: "140px" }} src={image} alt="placeholder" />
            </CardBody>
        </Card>
    )
}

export default PlantCard