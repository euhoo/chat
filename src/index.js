import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import gon from 'gon';
// import faker from 'faker';
// import cookies from 'js-cookie';
import io from 'socket.io-client';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import chat from './components/index';
import normalize from './utils/normalize';
import {
  newChannel, removeChannel, renameChannel, addMessage,
} from './utils/serverAnswerFunctions';
import reducers from './reducers';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const normilizedStore = normalize(gon);
const store = createStore(
  reducers,
  normilizedStore,
  applyMiddleware(thunk),
);

chat(store);
const socket = io();
socket.on('newChannel', data => newChannel(data, store));
socket.on('newMessage', data => addMessage(data, store));
socket.on('removeChannel', data => removeChannel(data, store));
socket.on('renameChannel', data => renameChannel(data, store));
