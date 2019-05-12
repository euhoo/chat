import React from 'react';
import Channels from './channels';
import NewMessagesForm from './newMessagesForm';
import ChatField from './chatField';
import NewChannelsForm from './newChannelsForm';
import RenameModal from './renameModal';
import appContext from '../utils/appContext';

class App extends React.Component {
  static contextType = appContext;

  render() {
    const style = {
      position: 'sticky',
      top: '2em',
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <br />
            <div style={style}>
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
