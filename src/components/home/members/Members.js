import React from 'react';
import { Container, Row } from 'react-bootstrap';

//App components
import BioModal from './BioModal';

//data
import { MemberBios } from '../../../data/members';

const Members = () => (
    [
        <div id="members"></div>,
        <Container className="text-center px-3 py-5">
            <h3 className="pb-3">Members</h3>
            <Row>
                {MemberBios.map(member => (
                    <BioModal member={member} />
                ))}  
            </Row>
        </Container>
    ]
);

export default Members;