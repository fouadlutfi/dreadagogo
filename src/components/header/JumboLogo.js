import React from 'react';
import { Container, Image } from 'react-bootstrap';

//Resources
import jumboLogo from '../../img/logos/cover.png';

const JumboLogo = () => (
    <Container as="div" className="text-center pb-md-5">
        <Image fluid id="jumbo-logo" src={jumboLogo} alt="Dread A Go-Go"/>
    </Container>
);

export default JumboLogo;