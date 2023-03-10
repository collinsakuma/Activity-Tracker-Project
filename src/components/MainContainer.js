import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Routes from './Routes';
import CollinSakumaProfileLink from "./CollinSakumaProfileLink";
import CollinDossProfileLink from './CollinDossProfileLink';
import KatelynLutherProfileLink from './KatelynLutherProfileLink';

function MainContainer({ activities, addActivitytoActivities, showForm, sortActivities }) {
    return (
        <Switch>
            <Route path="/profile">
                <Profile activities={activities}/>
            </Route>
            <Route exact path="/profiles/Collin Sakuma">
                <CollinSakumaProfileLink activities={activities}/>
            </Route>
            <Route exact path="/profiles/Collin Doss">
                <CollinDossProfileLink activities={activities}/>
            </Route>
            <Route exact path="/profiles/Katelyn Luther">
                <KatelynLutherProfileLink activities={activities}/>
            </Route>
            <Route path="/routes">
                <Routes />
            </Route>
            <Route exact path="/">
                <Home activities={activities} addActivitytoActivities={addActivitytoActivities} showForm={showForm} sortActivities={sortActivities}/>
            </Route>
        </Switch> 
    )
}
export default MainContainer;