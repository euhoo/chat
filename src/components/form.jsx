import React from 'react';
import appContext from '../appContext';

export default class Form extends React.Component {
  static contextType = appContext;

  sendMessage = () => {
    const { userName, queries } = this.context;
    const { addChannel } = queries;
    console.log(userName);

    const data = {
      attributes: {
        name: 'q111',
      },
    };
    addChannel(data);
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
