import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Routes from './Routes';

function MainContainer() {
    return (
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
    )
}
export default MainContainer;