import React from 'react';
import Channels from './Channels';
import NewMessagesForm from './NewMessagesForm';
import ChatField from './ChatField';
import NewChannelsForm from './NewChannelsForm';
import RenameModal from './RenameModal';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <div className="row">
          <div className=" mr-0 col-12 col-md-3">
            <br />
            <div className="sticky-top">
              <Channels />
              <RenameModal />
              <br />
              <NewChannelsForm />
            </div>

          </div>
          <div className="col-12 col-md-9">
            <br />
            <ChatField />
            <NewMessagesForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
