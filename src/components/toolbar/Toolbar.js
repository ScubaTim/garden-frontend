import React from 'react';
import {
    Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink, Button
} from 'reactstrap';

const Toolbar = ({ toggleGardenView, setToggleGardenView }) => {

    return (
        <div className="mb-5">
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Gardenly</NavbarBrand>
                <Collapse navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink className="text-dark" href="https://github.com/reactstrap/reactstrap">About</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <Button onClick={() => setToggleGardenView(!toggleGardenView)} color="success">{toggleGardenView ? <span><span className="font-weight-bold">+</span> New Plant</span> : 'Garden View'}</Button>
            </Navbar>
        </div>
    );
}

export default Toolbar;