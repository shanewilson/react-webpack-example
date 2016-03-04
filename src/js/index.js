import 'babel-polyfill';
import ReactDOM from 'react-dom';
import { h } from 'react-hyperscript-helpers';
import { Provider } from 'react-redux';

import configureStore from './store';
import App from 'components/App';

const store = configureStore({});

ReactDOM.render(
  h(Provider, { store }, h(App)),
  document.getElementById('react-webpack-example')
);
