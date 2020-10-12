import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Home from './pages/Home';
import AppScreen from './pages/AppScreen';
import Login from './pages/Login';
import Calendar from './pages/Calendar';
import Hour from '../Hour';
import Map from './pages/Map';
import Sucess from './pages/Sucess';
import Twist from './pages/Twist';
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
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
