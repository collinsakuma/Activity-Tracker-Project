import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Profile from './components/Profile';
import Routes from './components/Routes';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/routes">
          <Routes />
        </Route>
      </Switch> 
    </div>
  );
}

export default App;
