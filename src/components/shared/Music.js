import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

//data
import { SpotifyLink,  SoundCloudTracks } from '../../data/content';

const Music = () => (
    <Tabs defaultActiveKey="spotify" id="music" className="music">
        <Tab eventKey="spotify" title="Spotify">
            <iframe 
                title="Spotify Playlist"
                src={SpotifyLink}
                width="100%" 
                height="200" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media"
            />
        </Tab>
       
        <Tab eventKey="soundcloud" title="SoundCloud">
            { SoundCloudTracks.map((track) => (
                <iframe
                    title={track.title}
                    className="mb-3" 
                    width="100%" 
                    height="300" 
                    scrolling="no" 
                    frameborder="no" 
                    allow="autoplay" 
                    src={track.link}
                />
            ))}
        </Tab>
    </Tabs>
);

export default Music;