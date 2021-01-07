import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import Modal from '../modal/Modal'

const Toolbar = ({ toggleGardenView, setToggleGardenView, loggedIn }) => {
    const [toggleModal, setToggleModal] = useState(false)

    return (
        <div className="mb-4">
            <Navbar light expand="md" style={{ backgroundColor: "#f8f8f4" }}>
                <NavbarBrand href="/">Gardenly</NavbarBrand>
                <Collapse navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink className="text-dark" onClick={() => setToggleModal(!toggleModal)} style={{ cursor: "pointer" }}>About</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                {loggedIn ? <Button onClick={() => setToggleGardenView(!toggleGardenView)} color="success">{toggleGardenView ? <span><span className="font-weight-bold">+</span> New Plant</span> : 'Garden View'}</Button> : <Button disabled color="success">Garden View</Button>}
            </Navbar>
            <Modal toggleModal={toggleModal} setToggleModal={setToggleModal} aboutGardenly />
        </div>
    );
}

export default Toolbar;