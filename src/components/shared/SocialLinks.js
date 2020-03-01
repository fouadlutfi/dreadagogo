import React from 'react';
import { Image } from 'react-bootstrap';

//data
import { Socials } from '../../data/socials';

const SocialLinks = () => (
    Socials.map( (social) => (
        <a className="rounded-circle" href={social.link} target="_blank" rel="noopener noreferrer">
            <Image src={social.image} alt={social.alt} roundedCircle />
        </a>
    ))
);

export default SocialLinks;