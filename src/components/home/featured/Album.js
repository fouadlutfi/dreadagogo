import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Album = () => (
    [
        <h3 className="text-center mb-md-3 mb-xl-5">DEMO</h3>,
        <Jumbotron className="album mb-2 mx-auto" />,
        <div className="text-center mb-5">
            <a className="d-inline-block mx-auto album-link" href="">Order Now</a>
        </div>                  
    ]
);

export default Album;