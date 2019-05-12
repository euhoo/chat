export default ({ channels, messages, currentChannelId }) => {
  const channelFunc = (acc, { id, name, removable }) => {
    const obj = {
      [id]: {
        id,
        name,
        removable,
      },
    };
    return { ...acc, ...obj };
  };

  const allChannellsIds = channels.map(item => item.id);
  const byChannelsId = channels.reduce(channelFunc, {});

  const store = {
    channels: { byId: byChannelsId, allIds: allChannellsIds },
    messages,
    currentChannelId,
  };
  return store;
};
