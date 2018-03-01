import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { Root } from './components/root.jsx';
import { HashRouter, Route } from 'react-router-dom';




document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, rootEl);
});
