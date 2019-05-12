const channels = '/api/v1/channels/';

export default {
  messages(channelId) { return `${channels}${channelId}/messages`; },
  channels,
  channelId(id) { return `${channels}${id}`; },
};
