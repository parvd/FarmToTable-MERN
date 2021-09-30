import React from 'react';
import { Container, Row, Col, Button ,Modal } from 'react-bootstrap';
const NewModal = (props) => {
	return (
		<Modal show={props.show} onHide={props.handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>{props.modalTitle}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
                {props.children}
            </Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={props.handleClose}>
					Close
				</Button>
				<Button variant="primary" onClick={props.handleClose}>
					Save
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default NewModal;
