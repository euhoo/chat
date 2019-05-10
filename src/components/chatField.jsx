import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  const props = {
    messages: state.messages,
    currentChannelId: state.currentChannelId,
  };
  return props;
};

const actionCreators = {
  addMessageAction: actions.addMessageAction,
  removeChannelAction: actions.removeChannelAction,
  renameChannelAction: actions.renameChannelAction,
  changeChannelAction: actions.changeChannelAction,
};

const ChatField = (props) => {
  const { messages, currentChannelId } = props;
  const filteredMessages = messages.filter(message => message.channelId === currentChannelId);
  return (
    <React.Fragment>
      {filteredMessages.map(message => (
        <div key={message.id}>
          {message.name}
:
          {' '}
          {message.text}
        </div>
      ))}
    </React.Fragment>
  );
};
export default connect(mapStateToProps, actionCreators)(ChatField);
