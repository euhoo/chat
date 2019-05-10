import React from 'react';
import { connect } from 'react-redux';
import appContext from '../utils/appContext';
import * as actions from '../actions';
import NewChannelsForm from './newChannelsForm';


const mapStateToProps = (state) => {
  const props = {
    channels: state.channels,
    currentChannelId: state.currentChannelId,
  };
  return props;
};

const actionCreators = {
  addMessageAction: actions.addMessageAction,
  removeChannelAction: actions.removeChannelAction,
  renameChannelAction: actions.renameChannelAction,
  changeChannelAction: actions.changeChannelAction,
};

class Channels extends React.Component {
    static contextType = appContext;

    deleteChannel = id => () => {
      /*
      // console.log(id);
      const { queries } = this.context;
      const { deleteChannel } = queries;
      deleteChannel(id);
      */
    }

    render() {
      const { channels: { byId } } = this.props;
      return (
        <div>

          {byId.map((item) => {
            const channel = Object.values(item)[0];
            const { removable, id } = channel;
            const delButton = removable ? <button className="btn btn-outline-danger" style={{ width: '20%' }} type="button" onClick={this.deleteChannel(id)}>del</button> : null;
            const channelButtonStyle = removable ? { width: '80%' } : { width: '100%' };
            return (
              <React.Fragment key={channel.id}>
                <div className="w-100">
                  <button className="btn btn-outline-success" style={channelButtonStyle} type="button">{channel.name}</button>
                  {delButton}
                </div>
              </React.Fragment>
            );
          })}
          <NewChannelsForm />
        </div>
      );
    }
}

export default connect(mapStateToProps, actionCreators)(Channels);
