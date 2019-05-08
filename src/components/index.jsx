import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

export default (state, name) => {
  ReactDOM.render(<App state={state} name={name} />, document.getElementById('chat'));
};
