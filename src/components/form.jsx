import React from 'react';
import axios from 'axios';

export default class Form extends React.Component {
  sendMessage = () => {
    const { name } = this.props;
    console.log(name);
    axios.get('api/v1/channels/')
      .then(response => console.log(response.body));
  };

  render() {
    return (
      <form>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Сообщение" aria-label="Текст" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" onClick={this.sendMessage}>Отправить</button>
          </div>
        </div>
      </form>
    );
  }
}
