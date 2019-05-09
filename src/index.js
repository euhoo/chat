import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import gon from 'gon';
// import faker from 'faker';
// import cookies from 'js-cookie';
import io from 'socket.io-client';
import { createStore } from 'redux';
import chat from './components/index';
import normalize from './utils/normalize';
import { newChannel, removeChannel, renameChannel, newMessage } from './utils/serverAnswerFunctions';
import reducers from './reducers';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}
const normilizedStore = normalize(gon);
const store = createStore(
  reducers,
  normilizedStore,
);
chat(store);
const socket = io();
socket.on('removeChannel', removeChannel);
socket.on('newMessage', newMessage);
