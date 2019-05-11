import React from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import * as actions from '../actions';
import RenameChannelForm from './renameChannelForm';

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
    console.log(name);
    return (
      <>
        <ReactModal
          isOpen={show}
          contentLabel="Modal"
          style={customStyles}
        >
          <p>
          Current name:
            {name}
          </p>
          <RenameChannelForm />
          <br />
          <button onClick={this.handleCloseModal} type="button">Close</button>
        </ReactModal>
      </>
    );
  }
}

export default renameModal;
