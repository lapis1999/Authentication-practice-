import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './login/login'
import { Route, BrowserRouter as Router } from 'react-router-dom'

const routing = (
  <Router>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous"></link>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

