import React from 'react';
import { Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';

const PlantModal = ({ toggleModal, setToggleModal, plant, aboutGardenly }) => {
    console.log(plant)

    if (aboutGardenly) {
        return (
            <div>
                <Modal className="shadow-lg shadow" isOpen={toggleModal} toggle={() => setToggleModal(!toggleModal)}>
                    <ModalHeader className="px-4 mb-2" toggle={() => setToggleModal(!toggleModal)}>
                        <span className="h1">About Garden-ly</span>
                    </ModalHeader>
                    <hr />
                    <ModalBody>
                        <p className="px-2">Garden-ly is an app built for gardeners to keep track of stats of the plants the've planted - such as optimal growing conditions, time to sprout, time to harvest, etc.</p>
                    </ModalBody>
                </Modal>
            </div>
        )
    }

    return (
        <div>
            <Modal className="shadow-lg shadow" isOpen={toggleModal} toggle={() => setToggleModal(!toggleModal)}>
                <ModalHeader className="px-4 mb-2" toggle={() => setToggleModal(!toggleModal)}>
                    <span className="h1">{plant.name}</span>
                    <p className="mb-0" style={{ marginLeft: "2px" }}>{plant.scientificName}</p>
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Col className="text-center">
                            <img style={{ width: "98%", maxWidth: "90vw" }} className="rounded mb-4" src={plant.imageURL} alt="plant" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="px-2"><strong>Description:</strong> &nbsp;{plant.description}</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="px-3">
                        <Col>
                            <p>From Seed:&nbsp; <strong>{plant.grownFromSeed}</strong></p>
                        </Col>
                        <Col>
                            <p>Heirloom:&nbsp; <strong>{plant.heirloom}</strong></p>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="px-3">
                        <Col>
                            <p>Ideal Temp:&nbsp; <strong>{plant.idealTemp}</strong></p>
                        </Col>
                        <Col>
                            <p>Seed Depth:&nbsp; <strong>{plant.seedDepth}</strong></p>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="px-3">
                        <Col>
                            <p>Soil Type:&nbsp; <strong>{plant.soilType}</strong></p>
                        </Col>
                        <Col>
                            <p>Spacing:&nbsp; <strong>{plant.spacing}</strong></p>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="px-3">
                        <Col>
                            <p>Sprouts In:&nbsp; <strong>{plant.sproutsIn}</strong></p>
                        </Col>
                        <Col>
                            <p>Harvest In:&nbsp; <strong>{plant.timeToHarvest}</strong></p>
                        </Col>

                    </Row>
                    <hr />
                    <Row className="px-3">
                        <Col>
                            <p>Sunlight:&nbsp; <strong>{plant.sunlight}</strong></p>
                        </Col>
                        <Col>
                            <p>Watering:&nbsp; <strong>{plant.watering}</strong></p>
                        </Col>
                    </Row>
                </ModalBody>
            </Modal>
        </div >
    );
}

export default PlantModal;