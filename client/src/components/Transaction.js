import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function Transaction(props) {
    let transaction = props.transaction

    return (
      <div style={{ display: 'block',
      width: 700, 
      padding: 30 }}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>
            {transaction.vendor}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p> {transaction.category}</p>
          <p> {transaction.amount}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary">
            Delete
          </Button>
        </Modal.Footer>
        
      </Modal.Dialog>
    </div>
      );
}
