import React from 'react'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import image from '../../images/1.png'

const PlantCard = (props) => {

    return (
        <Card className="text-center my-5 mx-2" style={{ width: "200px" }}>
            <CardBody>
                <CardTitle tag="h4">Plant Name</CardTitle>
                <CardText className="text-muted">
                    <span>Scientific name</span>
                    <hr />
                </CardText>
                <img style={{ width: "140px" }} src={image} alt="placeholder" />
            </CardBody>
        </Card>
    )
}

export default PlantCard