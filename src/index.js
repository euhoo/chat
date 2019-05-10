import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import gon from 'gon';
// import faker from 'faker';
// import cookies from 'js-cookie';
import io from 'socket.io-client';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import chat from './components/index';
import normalize from './utils/normalize';
import { newChannel, removeChannel, renameChannel, addMessage } from './utils/serverAnswerFunctions';
import reducers from './reducers';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

// eslint-disable-next-line no-underscore-dangle
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;

const normilizedStore = normalize(gon);
const store = createStore(
  reducers,
  normilizedStore,
  compose(
    applyMiddleware(thunk),
    reduxDevtools && reduxDevtools(),
  ),
);
chat(store);
const socket = io();
socket.on('newChannel', data => newChannel(data, store));
socket.on('newMessage', data => addMessage(data, store));
