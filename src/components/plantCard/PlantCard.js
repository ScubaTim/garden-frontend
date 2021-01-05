import React, { useState } from 'react'
import { Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import image from '../../images/1.png'
import { remove } from '../../services/plantsService'
import Modal from '../modal/Modal'

const PlantCard = ({ plant, plantsData, setPlantsData }) => {
    const [toggleModal, setToggleModal] = useState(false)

    const handleRemovePlant = () => {
        remove(plant.id)
            .then(removed => removed)
            .catch(err => console.log("There was an error removing note. Error: ", err))

        setPlantsData(plantsData.filter(p => p.id !== plant.id))
    }

    const togglePlantModal = () => {
        setToggleModal(!toggleModal)
    }

    return (
        <Card className="text-center m-2 px-2" body style={{ width: "200px", maxWidth: "200px", backgroundColor: "#f8f8f4" }}>
            <Modal toggleModal={toggleModal} setToggleModal={setToggleModal} plant={plant} />
            <Row className="px-2" style={{ marginTop: "-10px" }}>
                <Col>
                    <Button close onClick={handleRemovePlant} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <CardTitle tag="h4">{plant.name}</CardTitle>
                    <span className="text-muted">{plant.scientificName}</span>
                </Col>
            </Row>
            <CardBody className="pt-0 pb-0 d-flex flex-column justify-content-end">

                <CardText className="text-muted">
                    <hr />
                </CardText>
                <div>
                    <img className="rounded mb-3" style={{ width: "100%" }} src={plant.imageURL || image} alt="placeholder" />
                    <Button size="sm" block color="success" className="mt-3" onClick={() => togglePlantModal()}>More Info</Button>
                </div>
            </CardBody >
        </Card>
    )
}

export default PlantCard