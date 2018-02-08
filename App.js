import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import Root from './src/Root';
import store from './src/store'

export default class App extends React.Component {

  render() {

    return (
      <Provider store={store}>
        <Root/>
      </Provider>
    );
  }
}
