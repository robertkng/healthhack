import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App/App.jsx';
import Nav from './components/Nav/Nav.jsx';
import Add from './components/App/Add/Add.jsx';
import List from './components/App/List/List.jsx';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={List} />
        <Route path="/list" component={List} />
        <Route path="/add" component={Add} />
    </Route>
  </Router>
), document.querySelector('#root-container'));
