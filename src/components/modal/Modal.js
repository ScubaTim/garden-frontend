import React from 'react';
import { Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';

const PlantModal = ({ toggleModal, setToggleModal, plant }) => {
    console.log(plant)
    return (
        <div>
            <Modal className="shadow-lg shadow" isOpen={toggleModal} toggle={() => setToggleModal(!toggleModal)}>
                <ModalHeader className="px-4 ml-3 mb-3" toggle={() => setToggleModal(!toggleModal)}>
                    <span className="h1">{plant.name}</span>
                    <p style={{ marginLeft: "2px" }}>{plant.scientificName}</p>
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Col>
                            <img style={{ width: "78%" }} className="ml-5 rounded mb-4" src={plant.imageURL} alt="plant" />
                            <p className="px-5"><strong>Description:</strong> &nbsp;{plant.description}</p>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="px-5">
                        <Col>
                            <p>From Seed:&nbsp; <strong>{plant.grownFromSeed}</strong></p>
                        </Col>
                        <Col>
                            <p>Heirloom:&nbsp; <strong>{plant.heirloom}</strong></p>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="px-5">
                        <Col>
                            <p>Ideal Temp:&nbsp; <strong>{plant.idealTemp}</strong></p>
                        </Col>
                        <Col>
                            <p>Seed Depth:&nbsp; <strong>{plant.seedDepth}</strong></p>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="px-5">
                        <Col>
                            <p>Soil Type:&nbsp; <strong>{plant.soilType}</strong></p>
                        </Col>
                        <Col>
                            <p>Plant Spacing:&nbsp; <strong>{plant.spacing}</strong></p>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="px-5">
                        <Col>
                            <p>Sprouts In:&nbsp; <strong>{plant.sproutsIn}</strong></p>
                        </Col>
                        <Col>
                            <p>Time to Harvest:&nbsp; <strong>{plant.timeToHarvest}</strong></p>
                        </Col>

                    </Row>
                    <hr />
                    <Row className="px-5">
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