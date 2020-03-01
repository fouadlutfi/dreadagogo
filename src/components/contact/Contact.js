import React from 'react';
import { Container } from 'react-bootstrap';

//App components
import ContactInfo from '../shared/ContactInfo';

const Contact = () => (
    [
        <div id="contact" />,
        <Container className="contact" >
            <h3 className="text-center">Contact DREAD A Go-Go</h3>
            <ContactInfo />
        </Container>
    ]
);

export default Contact;