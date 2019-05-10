const channels = '/api/v1/channels/';

export default {
  messages(channelId) { return `${channels}${channelId}/messages`; },
  channels, // used for new channel
  channelId(id) { return `${channels}${id}`; }, // used for delete and rename channels
};
