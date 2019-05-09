import React from 'react';
import axios from 'axios';
import routes from '../routes';

export default class Form extends React.Component {
  sendMessage = () => {
    const { name } = this.props;
    const data = {
      attributes: {
        name: 'qefwef',
      },
    };
    axios.post(routes.channels, { data })
      .then(response => console.log(response))
      .then(() => console.log(window.gon));  // проверяю, что добавляет
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
