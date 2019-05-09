const channels = '/api/v1/channels/';

export default {
  messages(channelId) { return `${channels}${channelId}/messages`; },
  channels, // new channel
  channelId(id) { return `${channels}${id}`; }, // delete, rename
};

/*
export default {
  messages: function(channelId) { return `${this.channels}${channelId}/messages` },
  channels: '/api/v1/channels/', // new channel
  channelId: function(id){ return `${this.channels}${id}`}, // delete, rename
};
*/
