import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
// import RenameModal from './renameModal';
import appContext from '../utils/appContext';
import * as actions from '../actions';

const mapStateToProps = ({ channels, currentChannelId }) => {
  const props = {
    channels,
    currentChannelId,
  };
  return props;
};

@connect(mapStateToProps, actions)
class Channels extends React.Component {
    static contextType = appContext;

    renameChannel = id => (e) => {
      e.stopPropagation();
    }

    changeChannel = id => () => {
      // eslint-disable-next-line no-shadow
      const { changeChannelAction } = this.props;
      changeChannelAction(id);
    }

    deleteChannel = id => (e) => {
      e.stopPropagation();
      const { queries } = this.context;
      // eslint-disable-next-line no-shadow
      const { channels, changeChannelAction, currentChannelId } = this.props;
      const { deleteChannel } = queries;
      if (id === currentChannelId) {
        const { allIds } = channels;
        const filtered = allIds.filter(item => item !== id);
        const idForChange = filtered[0];
        changeChannelAction(idForChange);
      }
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
            const delIcon = removable ? <FontAwesomeIcon icon={faTrash} className="float-right" onClick={this.deleteChannel(id)} /> : null;
            const renameIcon = <FontAwesomeIcon icon={faPencilAlt} className="float-right mr-2" onClick={this.renameChannel(id)} />;
            const classes = `btn btn-${currentChannelId === id ? '' : 'outline-'}success w-100`;
            return (
              <React.Fragment key={id}>
                <div className="container-fluid">
                  <button className={classes} type="button" onClick={this.changeChannel(id)}>
                    {name}
                    {delIcon}
                    {renameIcon}
                  </button>
                  {/* <RenameModal /> */}
                </div>
              </React.Fragment>
            );
          })}
        </>
      );
    }
}

export default Channels;
