import React from 'react';

const Channels = (props) => {
  const { channels } = props;
  return (
    <div>
      {channels.map(channel => <div key={channel.id}>{channel.name}</div>)}
    </div>
  );
};
export default Channels;
