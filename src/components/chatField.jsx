import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = ({ messages, currentChannelId }) => {
  const props = {
    messages,
    currentChannelId,
  };
  return props;
};

@connect(mapStateToProps, actions)
class ChatField extends React.Component {
  render() {
    const { messages, currentChannelId } = this.props;
    const filteredMessages = messages.filter(message => message.channelId === currentChannelId);
    return (
      <div style={{ height: '80vh' }}>
        {filteredMessages.map(message => (
          <div key={message.id}>
            {message.name}
:
            {' '}
            {message.text}
          </div>
        ))}
      </div>
    );
  }
}
export default ChatField;
