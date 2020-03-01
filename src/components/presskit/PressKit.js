import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';

//App components
import Youtube from '../shared/Youtube';
import Music from '../shared/Music'
import SocialLinks from '../shared/SocialLinks';
import ContactInfo from '../shared/ContactInfo';

//data
import { SimilarBands, Radio, BandsPlayedWith } from '../../data/pressKit';

const PressKit = () => (
    [
        <div id="presskit" />,
        <Container className="presskit">
            <h3 className="text-center mb-5">Electronic Press Kit</h3>
            <Youtube />
            <Music />
            <div className="mt-5 text-center">
                <h5 className="my-5">Contact/Booking</h5>
                <ContactInfo />
                <h5 className="my-5" >Who We Sound Like</h5>
                <ListGroup>
                    {SimilarBands.map(band => (
                        <ListGroup.Item>{band}</ListGroup.Item>
                    ))}
                </ListGroup>
                <h5 className="my-5" >People we have not done concaine with</h5>
                <ListGroup>
                    {BandsPlayedWith.map(band => (
                        <ListGroup.Item>{band}</ListGroup.Item>
                    ))}
                </ListGroup>
                <h5 className="my-5" >Radio - We Get Spun Here</h5>
                <ListGroup>
                    {Radio.map(station => (
                        <ListGroup.Item>{station}</ListGroup.Item>
                    ))}
                </ListGroup>
                <h5 className="my-5">About</h5>
                
                <p>Dread a GO-G0  is a punk,ska,folk soul band.</p>
                <p>We are comprised of the three best friends that anybody can have.</p>
                <p>We are currently touring the Midwest in support of our debut album, Erasing Color, and are releasing online content (music videos, songs, and more) to our fans.</p>
                <p>Fuck the police </p>
                <p>We are Dread A Go-GO.</p>
                <h5 className="my-5">Social Media</h5>
                <section id="social" className="social-group d-flex justify-content-center mb-5">
                    <SocialLinks />
                </section>
            </div>
        </Container>   
    ]
);

export default PressKit;