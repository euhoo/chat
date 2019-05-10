import React from 'react';
import Channels from './channels';
import NewMessagesForm from './newMessagesForm';


const app = () => {
  // const { state } = props;
 // const messages = state.messages.byId;
 // const channels = state.channels.byId;
  return (
    <React.Fragment>

      <div className="row no-gutters" style={{ height: '5vh' }} />
      <div className="container-fluid">
        <div className="row no-gutters" style={{ height: '70vh' }}>
          <div className="col-3 mx-auto" style={{ backgroundColor: 'grey' }}>
            <Channels />
          </div>
          <div className="col-9" style={{ backgroundColor: 'lightgrey' }}>
            чат
          </div>
        </div>
        <div className="row no-gutters" style={{ height: '20vh' }}>
          <div className="col-3" style={{ backgroundColor: 'grey' }} />
          <div className="col-9" style={{ backgroundColor: 'darkgrey' }}>
            <NewMessagesForm />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default app;
