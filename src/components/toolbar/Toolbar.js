import React from 'react';
import {
    Collapse,
    Navbar,
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

const Toolbar = ({ plantsData }) => {

    const plantsDropdown = () => {
        plantsData.map(plant => (
            <DropdownItem key={plant._id}>
                {plant.name}
            </DropdownItem>
        ))
    }

    return (
        <div className="mb-5">
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Gardenly</NavbarBrand>
                <Collapse navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink className="text-dark" href="https://github.com/reactstrap/reactstrap">About</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle className="text-dark" nav caret>
                                Plants List
                            </DropdownToggle>
                            <DropdownMenu right>
                                <div>
                                    {plantsDropdown()}
                                </div>
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