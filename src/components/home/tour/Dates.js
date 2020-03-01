import React from 'react';
import { ListGroup } from 'react-bootstrap';

//data
import { TourDates } from '../../../data/tour';

const Dates = () => (
    <div>
        <h4 className="text-center py-4">Dates</h4>
        <ListGroup>
            {TourDates.map(date => {
                if (Date.parse(date.date) >= Date.now() - 86400000) {
                    return (
                        <ListGroup.Item
                            action
                            variant="dark"
                            as="a"
                            target="_blank" 
                            rel="noopener noreferrer" 
                            href={date.eventLink}
                        >
                            {`${date.date}`} &mdash; {`${date.venue}`} &mdash; {`${date.city}, ${date.state}`}
                        </ListGroup.Item>
                    );
                }
                else {
                    return null;
                }
            })}
        </ListGroup>
    </div>
);

export default Dates;