import axios from 'axios';
import routes from './routes';

const { messages, channels, channelId } = routes;


const addChannel = data => axios.post(channels, { data });

const deleteChannel = id => axios.delete(channelId(id));

const renameChannel = data => axios.patch(channelId(data.id), { data });

const addMessage = data => axios.post(messages(data.id), { data });

export default {
  addChannel,
  deleteChannel,
  renameChannel,
  addMessage,
};
