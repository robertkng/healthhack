import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App/App.jsx';
import List from './components/List/List.jsx';
import Add from './components/Add/Add.jsx';

ReactDOM.render((
  <Router history = {browserHistory}>
    <Route path={"/"} component={App} >
      <Route path={"list"} component={List} />
      <Route path={"add"} component={Add} />
    </Route>
    <Route path={"list"} component={List} />
    <Route path={"add"} component={Add} />
  </Router>
), document.querySelector('#root-container'));


