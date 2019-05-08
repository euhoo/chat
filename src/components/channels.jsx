import React from 'react';

export default class Channels extends React.Component {
  state = { visible: false }

  onNewButton = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  }

  onAddChannelButton = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  }

  render() {
    const { channels } = this.props;
    const { visible } = this.state;
    const styleInput = visible ? { display: '' } : { display: 'none' };
    const style = visible ? { display: 'none' } : { display: '' };
    return (
      <div>
        {channels.map(channel => <button className="btn btn-outline-success w-100" type="button" key={channel.id}>{channel.name}</button>)}
        <button className="btn btn-outline-dark w-100" type="button" style={style} onClick={this.onNewButton}>Новый канал</button>
        <form>
          <div className="input-group mb-3">
            <input type="text" className="form-control" style={styleInput} placeholder="Название" aria-label="Текст" aria-describedby="basic-addon2" />
            <button className="btn btn-outline-dark" type="button" style={styleInput} onClick={this.onAddChannelButton}>Добавить</button>
          </div>
        </form>
      </div>
    );
  }
}
