import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/application.css';
import gon from 'gon';
// import faker from 'faker';
// import cookies from 'js-cookie';
// import io from 'socket.io';
import chat from './components/index';
import normalize from './normalize';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}
const store = normalize(gon);
console.log(store);
chat(gon);
