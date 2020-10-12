import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Home from './pages/Home';
import AppScreen from './pages/AppScreen';
import Login from './pages/Login';
import Calendar from './pages/Calendar';
import hour from './pages/hour';
import map from './pages/map';
import sucess from './pages/sucess';
import twist from './pages/twist';
import search from './pages/seach';
import scheduling from './pages/scheduling'
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/appScreen" component={AppScreen} />
            <Route path="/hour" component={Hour} />
            <Route path="/map" component={Map} />
            <Route path="/sucess" component={Sucess} />
            <Route path="/twist" component={Twist} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/search" component={search} />
            <Route path="/scheduling" component={scheduling} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
