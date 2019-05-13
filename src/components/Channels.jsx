import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import * as actions from '../actions';
import appContext from '../utils/appContext';

const mapStateToProps = ({ channels, currentChannelId, modal }) => {
  const props = {
    channels,
    currentChannelId,
    modal,
  };
  return props;
};

@connect(mapStateToProps, actions)
class Channels extends React.Component {
  static contextType = appContext;

    renameChannel = id => () => {
      const { openModalAction, channels } = this.props;
      const { name } = channels.byId[id];
      openModalAction({ name });
    }

    changeChannel = id => () => {
      const { changeChannelAction } = this.props;
      changeChannelAction(id);
    }

    deleteChannel = id => (e) => {
      e.stopPropagation();
      
      const { queries } = this.context;
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
      const { byId, allIds } = channels;
      const style = {
        position: 'sticky',
        top: '2em',
      };
      return (
        <div style={style}>
          {allIds.map((key) => {
            const { removable, id, name } = byId[key];
            const deleteIcon = removable ? <FontAwesomeIcon icon={faTrash} className="float-right" onClick={this.deleteChannel(id)} /> : null;
            const removeIcon = <FontAwesomeIcon icon={faPencilAlt} className="float-right mr-2" onClick={this.renameChannel(id)} />;
            const classes = `btn btn-${currentChannelId === id ? '' : 'outline-'}dark w-100 border-0 rounded-0`;
            return (
              <div className="container-fluid" key={id}>
                <button className={classes} type="button" onClick={this.changeChannel(id)}>
                  {name}
                  {deleteIcon}
                  {removeIcon}
                </button>
              </div>
            );
          })}
        </div>
      );
    }
}

export default Channels;
