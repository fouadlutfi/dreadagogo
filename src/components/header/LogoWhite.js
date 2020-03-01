import React from 'react';
import { Navbar } from 'react-bootstrap';

//Resources
import logoWhite from '../../img/logos/default-monochrome-white.svg';

const LogoWhite = () => (
    <Navbar.Brand href="/">
        <img height="35px" src={logoWhite} alt="Dread a Go-go Logo" />
    </Navbar.Brand>
);

export default LogoWhite;