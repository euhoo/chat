// import { userName } from './appContext';

export default ({ channels, messages, currentChannelId }) => {
  const channelFunc = ({ id, name, removable }) => ({
    [id]: {
      id,
      name,
      removable,
    },
  });

  const messagesFunc = item => ({
    [item.id]: {
      id: item.id,
      channelId: item.channelId,
      author: item.name,
      message: item.message,
    },
  });


  const allChannellsIds = channels.map(item => item.id);
  const byChannelsId = channels.map(channelFunc, {});
  const allMessagesIds = messages.map(item => item.id);
  const byMessagesId = messages.map(messagesFunc, {});


  const store = {
    channels: { byId: byChannelsId, allIds: allChannellsIds },
    messages: { byId: byMessagesId, allIds: allMessagesIds },
    currentChannelId,
  };
  return store;
};


/*
    channels : {
        byId : {
            "1" : {
                id : "1",
                name : "general",
                removable: "true",
            },
        },
        allIds : ["1", "2"]
    },
    messages : {
        byId : {
            "1" : {
                id : "1",
                channelId: "1"
                author : "user1",
                comment : ".....",
            },
        },
        allIds : ["1", "2", "3", "4", "5"]
    },
*/
