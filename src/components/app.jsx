import React from 'react';
import Channels from './channels';
import NewMessagesForm from './newMessagesForm';
import ChatField from './chatField';
import NewChannelsForm from './newChannelsForm';
import RenameChannelForm from './renameChannelForm';

export default () => (
  <>
    <div className="row no-gutters" style={{ height: '5vh' }} />
    <div className="container-fluid">
      <div className="row no-gutters">
        <div className="col-3 mx-auto" style={{ backgroundColor: 'white' }}>
          <RenameChannelForm />
          <Channels />
          <NewChannelsForm />
        </div>
        <div className="col-9" style={{ backgroundColor: 'white' }}>
          <NewMessagesForm />
          <ChatField />
        </div>
      </div>

    </div>
  </>
);
