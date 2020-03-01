import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

//App components
import SocialLinks from '../shared/SocialLinks';

const Footer = () => (
    <footer className="text-center py-5">
        <Link to="/#featured" className="d-inline-block mb-3 info-link mr-2">Home</Link>
        <Link to="/contact#contact" className="d-inline-block mb-3 mr-2 info-link">Contact</Link>
        <Link to="/presskit#presskit" className="d-inline-block mb-3 info-link">Press Kit</Link>
        <p>&copy;2019 DREAD A GO-GO. All rights reserved. Site by Fouad Lutfi.</p>
        <section id="social" className="social-group d-flex justify-content-center">
            <SocialLinks />
        </section>
    </footer>
);

export default Footer;