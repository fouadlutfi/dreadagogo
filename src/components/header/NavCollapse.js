import React from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';

//data
import { MainSections, DropdownSections } from '../../data/sections';

const NavCollapse = () => (
    <Navbar.Collapse className="d-md-flex justify-content-end" id="navbarNavDropdown">
        <Nav as="ul">
            {MainSections.map( section => (
                <Nav.Item as="li">
                    <Nav.Link href={section.link}>{section.name}</Nav.Link>
                </Nav.Item>
            ))}
            <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link} aria-haspopup="true" aria-expanded="false">More</Dropdown.Toggle>
                <Dropdown.Menu alignRight aria-labelledby="navbarDropdownMenuLink">
                    {DropdownSections.map( section => (
                        <Dropdown.Item as={Link} to={section.link}>{section.name}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </Nav>
    </Navbar.Collapse>
);

export default NavCollapse;