import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Routes from './Routes';

function MainContainer({ activities, addActivitytoActivities, showForm}) {
    return (
        <Switch>
            <Route path="/profile">
                <Profile activities={activities}/>
            </Route>
            <Route path="/profile/collinsakuma">
                <Profile activities={activities.filter(activity => {
                    if (activity.profile === "Collin Sakuma") return 
                })} />
            </Route>
            <Route path="/routes">
                <Routes />
            </Route>
            <Route exact path="/">
                <Home activities={activities} addActivitytoActivities={addActivitytoActivities} showForm={showForm}/>
            </Route>
        </Switch> 
    )
}
export default MainContainer;