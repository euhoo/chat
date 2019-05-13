import React from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import * as actions from '../actions';
import RenameChannelForm from './RenameChannelForm';

const mapStateToProps = ({ modal }) => {
  const props = {
    modal,
  };
  return props;
};

ReactModal.setAppElement('#chat');

@connect(mapStateToProps, actions)
class renameModal extends React.Component {
  handleCloseModal = () => {
    const { closeModalAction } = this.props;
    closeModalAction();
  }

  render() {
    const customStyles = {
      content: {
        top: '20%',
        left: '40%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-10%, -10%)',
      },
    };
    const { modal } = this.props;
    const { show, name } = modal;
    const buttonClasses = 'btn btn-outline-dark w-100 border-0 rounded-0';
    return (
      <>
        <ReactModal isOpen={show} contentLabel="Modal" style={customStyles}>
          <h3>Rename channel?</h3>
          <p>{`Current name: ${name}`}</p>
          <RenameChannelForm />
          <br />
          <button className={buttonClasses} type="button" onClick={this.handleCloseModal}>Close</button>
        </ReactModal>
      </>
    );
  }
}

export default renameModal;
