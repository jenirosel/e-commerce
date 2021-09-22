import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/ui/header/header.component.jsx';
import LoginPage from './pages/login/login.component';
import { db, auth, createUserProfileDocument } from './firebase/firebase.utils';
import { doc, onSnapshot } from "firebase/firestore";
import { setCurrentUser } from './redux/user/user.actions'

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        await createUserProfileDocument(userAuth);
        
        const userRef = doc(db, "users", userAuth.uid);
        onSnapshot(userRef, snapShot => {
          setCurrentUser({
            id: snapShot.id, 
            ...snapShot.data()
          });
        });
        
      } else {
        setCurrentUser(userAuth)
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
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/login' component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps)(App);
