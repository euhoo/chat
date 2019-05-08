import React from 'react';

export default class Channels extends React.Component {
  state = { visible: false }

  onButton = (e) => {
    //e.preventDefault();
    const { visible } = this.state;
    console.log(visible);
    this.setState({ visible: !visible });
  }

  onClick = (e) => {
    //e.preventDefault();
    alert('sdf');
  }

  render() {
    const { channels } = this.props;
    const { visible } = this.state;
    const styleInput = visible ? { display: '' } : { display: 'none' };
    const style = visible ? { display: 'none' } : { display: '' };
    return (
      <div>
        {channels.map(channel => <button className="btn btn-outline-success w-100" type="button" key={channel.id}>{channel.name}</button>)}
        <button className="btn btn-outline-dark w-100" type="button" style={style} onClick={this.onButton}>New</button>
        <form>
          <div className="input-group mb-3">
            <input type="text" className="form-control" style={styleInput} placeholder="Имя нового канала" aria-label="Текст" aria-describedby="basic-addon2" />
            <button className="btn btn-outline-dark" type="button" style={styleInput} onClick={this.onButton}>Add</button>
          </div>
        </form>
      </div>
    );
  }
}
