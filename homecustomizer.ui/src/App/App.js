import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Home from '../components/pages/Home/Home';
import Siding from '../components/pages/Siding/Siding';
import Shutters from '../components/pages/Shutters/Shutters';
import MyNavbar from '../components/pages/MyNavbar/MyNavbar';
import './App.scss';

function App() {
  return (
    <div>
        <Router>
          <MyNavbar />
          <Switch>
            <Route path="/home" exact component={Home}/>
            <Route path="/siding" exact component={Siding}/>
            <Route path="/shutters" exact component={Shutters}/>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
