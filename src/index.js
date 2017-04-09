import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App/App.jsx';
import One from './components/App/One/One.jsx';
import Two from './components/App/Two/Two.jsx';
import Three from './components/App/Three/Three.jsx';
import Four from './components/App/Four/Four.jsx';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={One} />
        <Route path="/Two" component={Two} />
        <Route path="/Four" component={Four} />
        <Route path="/Three" component={Three} />
    </Route>
  </Router>
), document.querySelector('#root-container'));
