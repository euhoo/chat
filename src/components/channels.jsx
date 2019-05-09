import React from 'react';
import appContext from '../utils/appContext';

export default class Channels extends React.Component {
  static contextType = appContext;

  state = { visible: false, value: '' }

  changeValue = ({ target }) => {
    const { value } = target;
    this.setState({ value });
  }

  deleteChannel = id => () => {
    // console.log(id);
    const { queries } = this.context;
    const { deleteChannel } = queries;
    deleteChannel(id);
  }

  onNewButton = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  }

  onAddChannelButton = () => {
    const { visible, value } = this.state;
    const { queries } = this.context;
    const { addChannel } = queries;
    // console.log(userName);
    const data = {
      attributes: {
        name: value,
      },
    };
    this.setState({ visible: !visible, value: '' });
    if (data.attributes.name.length === 0) return;
    addChannel(data);
  }

  render() {
    const { channels } = this.props;
    const { visible } = this.state;
    const styleInput = visible ? { display: '' } : { display: 'none' };
    const style = visible ? { display: 'none' } : { display: '' };
    return (
      <div>
        {channels.map((item) => {
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
        <button className="btn btn-outline-dark w-100" type="button" style={style} onClick={this.onNewButton}>Новый канал</button>
        <form>
          <div className="input-group mb-3">
            <input type="text" className="form-control" style={styleInput} placeholder="Название" aria-label="Текст" aria-describedby="basic-addon2" onChange={this.changeValue} />
            <button className="btn btn-outline-dark" type="button" style={styleInput} onClick={this.onAddChannelButton}>Добавить</button>
          </div>
        </form>
      </div>
    );
  }
}
