import React from 'react';
import { connect } from 'react-redux';
import appContext from '../utils/appContext';
import {
  addMessageAction, removeChannelAction, renameChannelAction, changeChannelAction,
} from '../actions';
import NewChannelsForm from './newChannelsForm';
import RenameChannelForm from './renameChannelForm';


const mapStateToProps = (state) => {
  const props = {
    channels: state.channels,
    currentChannelId: state.currentChannelId,
  };
  return props;
};

const actionCreators = {
  addMessageAction,
  removeChannelAction,
  renameChannelAction,
  changeChannelAction,
};

class Channels extends React.Component {
    static contextType = appContext;

    deleteChannel = id => () => {
      const { queries } = this.context;
      const { deleteChannel } = queries;
      deleteChannel(id);
    }

    changeChannel = id => () => {
      // eslint-disable-next-line no-shadow
      const { changeChannelAction } = this.props;
      changeChannelAction(id);
    }

    render() {
      const { channels, currentChannelId } = this.props;
      const { byId } = channels;
      const keys = Object.keys(byId);
      return (
        <div>
          <RenameChannelForm />
          {keys.map((key) => {
            const channel = byId[key];
            const { removable, id, name } = channel;
            const toggleButton = <button className="btn btn-outline-warning" style={{ width: '12%' }} type="button">E</button>;
            const delButton = removable ? <button className="btn btn-outline-danger" style={{ width: '12%' }} type="button" onClick={this.deleteChannel(id)}>D</button> : null;
            const width = removable ? { width: '76%' } : { width: '88%' };
            const outline = currentChannelId === id ? '' : 'outline-';
            const classes = `btn btn-${outline}success`;
            const channelButtonStyle = { width };
            return (
              <React.Fragment key={id}>
                <p className="w-100">
                  <button className={classes} style={channelButtonStyle} type="button" onClick={this.changeChannel(id)}>{name}</button>
                  {delButton}
                  {toggleButton}
                </p>
              </React.Fragment>
            );
          })}
          <NewChannelsForm />
        </div>
      );
    }
}

export default connect(mapStateToProps, actionCreators)(Channels);
