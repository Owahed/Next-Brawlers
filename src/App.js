
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import TeamDetail from './Components/TeamDetail/TeamDetail';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Next Brawlers</h1>
      </header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          
          <Route path="/team/:teamId">
            <TeamDetail></TeamDetail>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
