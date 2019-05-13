import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import cookies from 'js-cookie';
import App from './App';
import AppContext from '../utils/appContext';
import queries from '../utils/queries';

const context = { userName: cookies.get('name'), queries };

export default (store) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContext.Provider value={context}>
        <App />
      </AppContext.Provider>
    </Provider>,
    document.getElementById('chat'),
  );
};
