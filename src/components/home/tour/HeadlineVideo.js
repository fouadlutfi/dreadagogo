import React from 'react';

//data
import { HeadlineVideoLink } from '../../../data/tour';

const HeadlineVideo = () => (
    <iframe
        title="Headline Video"
        className="d-block mx-auto mb-3" 
        src={HeadlineVideoLink}
        scrolling="no" 
        frameborder="0" 
        allowTransparency="true" 
        allowFullScreen="true"
    />
);

export default HeadlineVideo;