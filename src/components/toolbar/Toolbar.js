import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
} from 'reactstrap';

const Toolbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="mb-5">
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Gardenly</NavbarBrand>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink className="text-dark" href="https://github.com/reactstrap/reactstrap">About</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle className="text-dark" nav caret>
                                Plants List
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Plant 1
                                </DropdownItem>
                                <DropdownItem>
                                    Plant 2
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
                <Button color="success ml-auto" ><span className="font-weight-bold">+</span> New Plant</Button>
            </Navbar>
        </div>
    );
}

export default Toolbar;