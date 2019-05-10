// import { userName } from './appContext';

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
