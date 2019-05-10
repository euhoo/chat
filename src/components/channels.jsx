import React from 'react';
import { connect } from 'react-redux';
import appContext from '../utils/appContext';
import {
  addMessageAction, removeChannelAction, renameChannelAction, changeChannelAction,
} from '../actions';

const mapStateToProps = ({ channels, currentChannelId }) => {
  const props = {
    channels,
    currentChannelId,
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

    changeChannel = id => () => {
      // eslint-disable-next-line no-shadow
      const { changeChannelAction } = this.props;
      changeChannelAction(id);
    }

    deleteChannel = id => () => {
      const { queries } = this.context;
      // eslint-disable-next-line no-shadow
      const { channels, changeChannelAction } = this.props;
      const { allIds } = channels;
      const filtered = allIds.filter(item => item !== id);
      const idForChange = filtered[0];
      const { deleteChannel } = queries;
      changeChannelAction(idForChange);
      deleteChannel(id);
    }


    render() {
      const { channels, currentChannelId } = this.props;
      const { byId } = channels;
      const keys = Object.keys(byId);
      return (
        <>
          {keys.map((key) => {
            const channel = byId[key];
            const { removable, id, name } = channel;
            const width = removable ? { width: '76%' } : { width: '88%' };
            const classes = `btn btn-${currentChannelId === id ? '' : 'outline-'}success`;
            const channelButtonStyle = { width };
            return (
              <React.Fragment key={id}>
                <p className="w-100">
                  <button className={classes} style={channelButtonStyle} type="button" onClick={this.changeChannel(id)}>{name}</button>
                  {removable ? <button className="btn btn-outline-danger" style={{ width: '12%' }} type="button" onClick={this.deleteChannel(id)}>D</button> : null}
                  <button className="btn btn-outline-warning" style={{ width: '12%' }} type="button">E</button>
                </p>
              </React.Fragment>
            );
          })}
        </>
      );
    }
}

export default connect(mapStateToProps, actionCreators)(Channels);
