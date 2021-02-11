import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import DashbourdPage from './pages/DashbourdPage';
import PostsPage from './pages/PostsPage';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DashbourdPage} />
        <Route exact path="/posts" component={PostsPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;