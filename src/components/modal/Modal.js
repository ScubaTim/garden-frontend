import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const PlantModal = ({ toggleModal, setToggleModal }) => {

    return (
        <div>
            <Modal isOpen={toggleModal} toggle={() => setToggleModal(!toggleModal)}>
                <ModalHeader toggle={() => setToggleModal(!toggleModal)}>Modal title</ModalHeader>
                <ModalBody>
                    <p>This is a story about a plant</p>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default PlantModal;