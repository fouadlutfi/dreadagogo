import React from 'react';
import { Container } from 'react-bootstrap';

//App components
import Youtube from '../../shared/Youtube';
import Music from '../../shared/Music';
import Album from './Album';

const Featured = () => (
    [
        <div id="featured" />,
        <Container as="div">
            <section className="mb-5">
                <h3 className="text-center mb-md-3 mb-xl-5">LIVE AT THE NICK</h3>
                <Youtube />
                <Album />
                <Music />
            </section>
        </Container>
    ]
);

export default Featured;