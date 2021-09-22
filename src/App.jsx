import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/ui/header/header.component.jsx';
import LoginPage from './pages/login/login.component';
import { db, auth, createUserProfileDocument } from './firebase/firebase.utils';
import { doc, onSnapshot } from "firebase/firestore";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        await createUserProfileDocument(userAuth);
        const userRef = doc(db, "users", userAuth.uid);
        onSnapshot(userRef, snapShot => {
           this.setState({
            currentUser: { id: snapShot.id, ...snapShot.data() }
           });
        });
      } else {
        this.setState({ currentUser: userAuth})
      }
    });

    console.log('State', this.state);

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/login' component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
