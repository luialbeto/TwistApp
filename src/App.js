import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Home from './pages/home';
import AppScreen from './pages/appScreen';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/appScreen" component={appScreen} />
            <Route path="/calendar" component={calendar} />
            <Route path="/hour" component={hour} />
            <Route path="/map" component={map} />
            <Route path="/sucess" component={sucess} />
            <Route path="/twist" component={twist} />
          </Switch>
        </BrowserRouter>
      </Provider>
      <AppScreen />
    </div>
  );
}

export default App;
