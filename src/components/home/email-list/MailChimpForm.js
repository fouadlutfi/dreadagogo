import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

class MailChimpForm extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            firstName: '',
            lastName: ''
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(e) {
        this.setState({email: e.target.value});
    }
    handleFirstNameChange(e) {
        this.setState({firstName: e.target.value});
    }
    handleLastNameChange(e) {
        this.setState({lastName: e.target.value});
    }
    handleSubmit(e) {
        //e.preventDefault();
        e.currentTarget.reset();
    }

    render() {
        return(
            <Form 
                action="https://gmail.us20.list-manage.com/subscribe/post" 
                method="post" 
                id="mc-embedded-subscribe-form" 
                name="mc-embedded-subscribe-form" 
                className="validate" 
                target="_blank" 
                novalidate
                onSubmit={this.handleSubmit}
            >
                <input type="hidden" name="u" value="6ca76057dec80a4b6d751c880" />
                <input type="hidden" name="id" value="9203622f06" />
                <div>
                    <h3 className="text-center">Get On Our Email List</h3>
                    <p className="text-center"><em>New music, videos, tour dates and more!</em></p>
                    <Row>
                        <Form.Group as={Col} md={4}>
                            <Form.Label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span></Form.Label>
                            <Form.Control value={this.state.email} onChange={this.handleEmailChange} as="input" type="email" name="EMAIL" className="required email" id="mce-EMAIL" required />
                            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>
                        <Form.Group as={Col} md={4}>
                            <Form.Label htmlFor="mce-FNAME">First Name </Form.Label>
                            <Form.Control value={this.state.firstName} onChange={this.handleFirstNameChange} as="input" type="text" name="FNAME" id="mce-FNAME"/>
                        </Form.Group>
                        <Form.Group as={Col} md={4}>
                            <Form.Label htmlFor="mce-LNAME">Last Name </Form.Label>
                            <Form.Control value={this.state.lastName} onChange={this.handleLastNameChange} as="input" type="text" name="LNAME" id="mce-LNAME"/>
                        </Form.Group>
                    </Row>
                    <Form.Group className="clear text-center mb-0 mt-2">
                        <Button class="button" type="submit" as="input" variant="light" value="Subscribe" name="subscribe"/>
                    </Form.Group>
                </div>
            </Form>
        );
    }
}

export default MailChimpForm;