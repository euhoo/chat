import React from 'react';
import Channels from './channels';
import NewMessagesForm from './newMessagesForm';
import ChatField from './chatField';
import NewChannelsForm from './newChannelsForm';
import RenameChannelForm from './renameChannelForm';

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <RenameChannelForm />
        <Channels />
        <NewChannelsForm />
      </div>
      <div className="col-md-8">
        <NewMessagesForm />
        <ChatField />
      </div>
    </div>
  </div>
);

export default App;
