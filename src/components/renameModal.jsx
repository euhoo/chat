import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import appContext from '../utils/appContext';

export default class MyModal extends React.Component {
  static contextType = appContext;

      state = {
        show: false,
      };


    handleClose = () => {
      this.setState({ show: false });
    }

    handleShow = () => {
      this.setState({ show: true });
    }

    render() {
      const { show } = this.state;
      
      return (
        <>
          
          <Button variant="primary" onClick={this.handleShow}>
          
            Launch demo modal
          </Button>

          <Modal show={show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, youe reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          {console.log('sdf121s')}
        </>
      );
    }
}
