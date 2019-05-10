import React from 'react';
import Channels from './channels';
import NewMessagesForm from './newMessagesForm';
import ChatField from './chatField';


const app = () => {
  // const { state } = props;
 // const messages = state.messages.byId;
 // const channels = state.channels.byId;
  return (
    <React.Fragment>

      <div className="row no-gutters" style={{ height: '5vh' }} />
      <div className="container-fluid">
        <div className="row no-gutters">
          <div className="col-3 mx-auto" style={{ backgroundColor: 'white' }}>
            <Channels />
          </div>
          <div className="col-9" style={{ backgroundColor: 'white' }}>
          <NewMessagesForm />
            <ChatField />
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-3" style={{ backgroundColor: 'white' }} />
          <div className="col-9" style={{ backgroundColor: 'white' }}>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default app;
