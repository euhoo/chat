import React from 'react';
import Channels from './channels';


const app = (props) => {
  const { state } = props;
  const { channels, messages } = state;
  return (
    <div>
      <Channels channels={channels} messages={messages} />
    </div>
  );
};
export default app;
