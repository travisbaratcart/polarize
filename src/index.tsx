import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { configureStore } from './store';
import '../sass/app.scss'

import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const store = configureStore();
const history = createBrowserHistory();

const config = {
  apiKey: "AIzaSyDK8UMHgn1LHYANbgu5SSbkmO2xunnK12Y",
  authDomain: "pollarize-7cb26.firebaseapp.com",
  databaseURL: "https://pollarize-7cb26.firebaseio.com",
  projectId: "pollarize-7cb26",
  storageBucket: "pollarize-7cb26.appspot.com",
  messagingSenderId: "17218251355"
};
firebase.initializeApp(config);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
