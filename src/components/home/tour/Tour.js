import React from 'react';

//App components
import HeadlineVideo from './HeadlineVideo';
import Dates from './Dates';
import Socials from './Socials';



const Tour = () => (
    [   
        <div id="tour" />,
        <div className="bg-1">
            <div className="container px-3 py-5">
                <h3 className="text-center pb-3">Tour</h3>
                <div className="shows my-4 text-center">
                    <HeadlineVideo />
                    <Dates />
                </div>
                <Socials />
            </div>
        </div>
    ]
);

export default Tour;