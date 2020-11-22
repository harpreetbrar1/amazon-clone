import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Login from './Login'
import Checkout from './Checkout';
import {UseStateValue} from './StateProvider';
import { auth } from './firebase';
function App() {
  const [{ basket }, dispatch] = UseStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    return ()=> {
      unsubscribe();
    }

  }, [])
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
