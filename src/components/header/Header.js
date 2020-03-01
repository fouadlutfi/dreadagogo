import React from 'react';
import { Navbar, Jumbotron } from 'react-bootstrap'

//App components
import LogoWhite from './LogoWhite';
import NavCollapse from './NavCollapse';
import SocialLinks from '../shared/SocialLinks';
import JumboLogo from './JumboLogo';

const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="md" variant="dark" fixed="top"> 
                <LogoWhite />
                <Navbar.Toggle data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" />
                <NavCollapse />
            </Navbar>
            <Jumbotron fluid className="main-header">
                <section className="social-group upper-social d-none d-sm-flex pt-2 pr-2 justify-content-end">
                    <SocialLinks />
                </section>
                <JumboLogo />
            </Jumbotron>    
        </header>
    );
}

export default Header;