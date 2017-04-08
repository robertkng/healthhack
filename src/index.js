import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './components/App/App.jsx';
<<<<<<< HEAD
import One from './components/App/One/One.jsx';
import Two from './components/App/Two/Two.jsx';
import Three from './components/App/Three/Three.jsx';
=======
import Add from './components/App/Add/Add.jsx';
import List from './components/App/List/List.jsx';
import Home from './components/App/Home/Home.jsx';
>>>>>>> b60893c8c821cbc90b7952e217f16ab5e0d83c72

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} >
<<<<<<< HEAD
      <IndexRoute component={One} />
        <Route path="/Two" component={Two} />
        <Route path="/Three" component={Three} />
=======
      <IndexRoute component={List} />
        <Route path="/add" component={Add} />
        <Route path="/home" component={Home} />
>>>>>>> b60893c8c821cbc90b7952e217f16ab5e0d83c72
    </Route>
  </Router>
), document.querySelector('#root-container'));
