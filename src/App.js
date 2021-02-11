import React from 'react';
import Shell from './components/Shell/Shell';

import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Shell>
          <Switch>
            <Route path='/home' component={HomePage} />
            <Route path='/about' component={AboutPage} />
            <Route exact path='/' component={HomePage} />
          </Switch>
        </Shell>
      </div>
  </Router>
  );
}

export default App;
