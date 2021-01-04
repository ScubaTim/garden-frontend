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
        <Card className="text-center  m-3" style={{ width: "180px", backgroundColor: "#f8f8f4" }}>
            <Modal toggleModal={toggleModal} setToggleModal={setToggleModal} plant={plant} />
            <Row className="px-2 pt-1">
                <Col>
                    <Button close onClick={handleRemovePlant} />
                </Col>
            </Row>
            <CardBody className="pt-0 pb-2">
                <Row style={{ marginTop: "-8px" }}>
                    <Col>

                        <CardTitle tag="h4">{plant.name}</CardTitle>

                    </Col>
                </Row>
                <hr className="mt-0 p-0" />
                <CardText className="text-muted">
                    <span>{plant.scientificName}</span>
                </CardText>

                <img className="rounded" style={{ width: "138px" }} src={plant.imageURL || image} alt="placeholder" />

                <Button size="sm" block color="success" className="mt-3" onClick={() => togglePlantModal()}>More Info</Button>
            </CardBody >
        </Card>
    )
}

export default PlantCard