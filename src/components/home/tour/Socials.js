import React from 'react';
import { Button, Image } from 'react-bootstrap';

//Resources
import bandsintownLogo from '../../../img/social/bandsintown.svg';

//data
import { FacebookLikeLink, BandsInTownLink } from '../../../data/tour';

const Socials = () => (
    <div>
        <p className="text-center mt-5 blurb">Like us on Facebook to keep track of our upcoming shows!</p>
        <iframe
            title="Facebook Like"
            className="d-block mx-auto"
            src={FacebookLikeLink}
            width="122" 
            height="65" 
            scrolling="no" 
            frameborder="0" 
            allowTransparency="true" 
            allow="encrypted-media"
        />
        <p className="text-center blurb">Track us on bandsintown!</p>
        <Button size="lg" className="btn-track mx-auto d-block">
            <a href={BandsInTownLink} target="_blank" rel="noopener noreferrer">
                <Image className="bandsintown-icon" src={bandsintownLogo} />
                <span>Track</span>
            </a>
        </Button>
    </div>
);

export default Socials;