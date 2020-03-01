import React from 'react';
import { Container } from 'react-bootstrap';

//App components
import MailChimpForm from './MailChimpForm';

const EmailList = () => (
    [
        <div id="email-list"></div>,
        <div className="bg-1 py-4">
            <Container>
                <div id="mc_embed_signup">
                    <MailChimpForm />
                </div>
            </Container>
        </div>
    ]
);

export default EmailList;