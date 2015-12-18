import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.jsx';
import Login from '../components/Login.jsx';
import {Router, Route, IndexRoute} from 'react-router';

// let Route = Router.Route;
// let DefaultRoute = Router.DefaultRoute;

let routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />

    <Route path="login" component={Login} />
  </Route>
);

// Router.run(routes, Router.HashLocation, (Root) => {
//   React.render(<Root />, document.getElementById('container'));
// });

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('container'));
