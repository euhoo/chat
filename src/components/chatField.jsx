import React from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import {
  addMessageAction, removeChannelAction, renameChannelAction, changeChannelAction,
} from '../actions';

const mapStateToProps = ({ messages, currentChannelId }) => {
  const props = {
    messages,
    currentChannelId,
  };
  return props;
};

const actionCreators = {
  addMessageAction,
  removeChannelAction,
  renameChannelAction,
  changeChannelAction,
};

@connect(mapStateToProps, actionCreators)
@withTranslation()
class ChatField extends React.Component {
  render() {
    const { messages, currentChannelId } = this.props;
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
  }
}
export default ChatField;
