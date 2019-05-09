import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

export default (state) => {
  ReactDOM.render(<App state={state} />, document.getElementById('chat'));
};
