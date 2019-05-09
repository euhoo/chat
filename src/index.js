import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import gon from 'gon';
// import faker from 'faker';
// import cookies from 'js-cookie';
// import io from 'socket.io';
import chat from './components/index';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

chat(gon);
