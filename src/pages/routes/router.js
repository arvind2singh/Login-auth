import React from 'react';
import { Switch, Route, Redirect  } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import Signup from '../Create';
import Page1 from '../Page1';
import Page2 from '../Page2';
import {useSelector } from "react-redux";
export default function Routes(props) { 
    const { isLoggedIn } = useSelector((state) => state.AuthReducer);
    return (
        <>
          <Switch>
          <Route exact path="/login" render={(props) =>
          !isLoggedIn ? (
            <Login {...props} />
          ) : (
            <Redirect to="/" />
          )
        }/>
          <Route exact path="/signup" render={(props) =>
          !isLoggedIn ? (
            <Signup {...props} />
          ) : (
            <Redirect to="/" />
          )
        }/>
        <Route exact path="/page1" render={(props) =>
          isLoggedIn ? (
            <Page1 {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }/>
        <Route exact path="/page2" render={(props) =>
          isLoggedIn ? (
            <Page2 {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }/>
          <Route exact path="/*" render={(props) =>
          isLoggedIn ? (
            <Home {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }/>
         </Switch>  
        </>
    )
}

