import React, { Component } from 'react';
import { Modal, Col, Image } from 'react-bootstrap';

class BioModal extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
        };
    }
    
    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    replaceLinks(paragraph, linkList) {
        linkList.forEach(link => {
            paragraph = paragraph.replace(link[0], `<a target="_blank" rel="noopener noreferrer" href=${link[1]}>${link[0]}</a>`);
        });
        return paragraph;
    };

    render() {

        const { 
            firstName,
            lastName,
            image,
            instrument,
            bio,
            bioLinks
        } = this.props.member;

        return (
            <Col xl={3} sm={6}>
                <h5>{firstName} {lastName}</h5>
                <a href={`#${firstName.toLowerCase()}-bio`} onClick={this.handleShow}>
                    <Image className="person" src={image} alt={firstName} roundedCircle />
                </a>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton id={`${firstName.toLowerCase()}-modal`} />
                    <Modal.Body className="text-center">
                        <h5>{firstName} {lastName}</h5>
                        <p>{instrument}</p>
                        {bio.map(paragraph =>
                            <p dangerouslySetInnerHTML={{__html: this.replaceLinks(paragraph, bioLinks)}} /> 
                        )}
                    </Modal.Body>
                </Modal>
            </Col>
        );
    }
}

export default BioModal;