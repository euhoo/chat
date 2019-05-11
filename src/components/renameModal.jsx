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
    const { modal } = this.props;
    const { show } = modal;
    return (
      <div>
        <ReactModal
          isOpen={show}
          contentLabel="Minimal Modal Example"
        >
          <RenameChannelForm />
          <button onClick={this.handleCloseModal} type="button">Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}

export default renameModal;
