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
import HomeCustomizer from '../components/pages/HomeCustomizer/HomeCustomizer';
import SingleCustomHome from '../components/pages/SingleCustomHome/SingleCustomHome';
import './App.scss';
import CommunitiesAvailableHomes from '../components/pages/CommunitiesAvailableHomes/CommunitiesAvailableHomes';

function App() {
  return (
    <div>
        <Router>
          <MyNavbar />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/homeCustomizer" exact component={HomeCustomizer}/>
            <Route path="/siding" exact component={AllSiding}/>
            <Route path="/shutters" exact component={AllShutters}/>
            <Route path="/customHome/:colorBoardId(\d+)" exact component={SingleCustomHome}/>
            <Route path="/availableHomes/:communityId(\d+)" exact component={CommunitiesAvailableHomes}/>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
