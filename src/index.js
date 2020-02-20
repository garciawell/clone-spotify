import './config/ReactotronConfig';
import './config/StatusBarConfig';
import codePush from 'react-native-code-push';
import React from 'react';
import { Provider } from 'react-redux';
import Routes from '~/routes';
import store from '~/store';
import Player from '~/components/Player';

const App = () => (
  <Provider store={store}>
    <Routes />
    <Player />
  </Provider>
);

// eslint-disable-next-line prefer-const
let codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
};

export default codePush(codePushOptions)(App);
