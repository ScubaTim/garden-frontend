import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const PlantModal = ({ toggleModal, setToggleModal, plant }) => {

    return (
        <div>
            <Modal isOpen={toggleModal} toggle={() => setToggleModal(!toggleModal)}>
                <ModalHeader toggle={() => setToggleModal(!toggleModal)}>{plant.name}</ModalHeader>
                <ModalBody>
                    <p>{plant.scientificName}</p>
                    <p>{plant.description}</p>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default PlantModal;