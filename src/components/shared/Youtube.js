import React from 'react';
import { Carousel } from 'react-bootstrap';

//data
import { YouTubeVideos } from '../../data/content';

const Youtube = () => (
    <div class="youtube mb-5">
        <Carousel interval={null} prevIcon={null} nextIcon={null}>
            { YouTubeVideos.map((video) => (
                <Carousel.Item>
                    <iframe
                        title={video.title}
                        width="100%" 
                        src={video.link}
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    </div>
);

export default Youtube;