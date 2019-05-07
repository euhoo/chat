import React from 'react';

const Channels = (props) => {
  const { channels } = props;
  return (
    <div>
      {channels.map(channel => <button className="btn btn-outline-success" type="button" key={channel.id}>{channel.name}</button>)}
      <button className="btn btn-outline-dark w-100" type="button">New</button>
      <form>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Имя нового канала" aria-label="Текст" aria-describedby="basic-addon2" />
        </div>
      </form>
    </div>
  );
};
export default Channels;
