import React from 'react';
import { Link as RouterLink } from "react-router-dom";

import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => {
  return <div>
    <h1>Hats Page</h1>
  </div>
}


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>

      {/* <HomePage /> */}
    </div>
  );
}

export default App;
