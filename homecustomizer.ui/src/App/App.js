import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from '../components/pages/Home/Home';
import AllSiding from '../components/pages/AllSiding/AllSiding';
import AllShutters from '../components/pages/AllShutters/AllShutters';
import MyNavbar from '../components/pages/MyNavbar/MyNavbar';
import './App.scss';

function App() {
  return (
    <div>
        <Router>
          <MyNavbar />
          <Switch>
            <Route path="/home" exact component={Home}/>
            <Route path="/siding" exact component={AllSiding}/>
            <Route path="/shutters" exact component={AllShutters}/>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
