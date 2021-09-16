import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';
import LoginPage from './pages/login/login.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/login' component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
