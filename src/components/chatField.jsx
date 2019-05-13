import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = ({ messages, currentChannelId }) => {
  const props = {
    messages: messages.filter(m => m.channelId === currentChannelId).reverse(),
    currentChannelId,
  };
  return props;
};

@connect(mapStateToProps, actions)
class ChatField extends React.Component {
  render() {
    const { messages } = this.props;
    return (
      <div>
        {messages.map(message => (
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
