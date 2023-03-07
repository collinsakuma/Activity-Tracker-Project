import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from "react";
import Home from './Home';
import Profile from './Profile';
import Routes from './Routes';

function MainContainer() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/activities")
            .then(res => res.json())
            .then(setActivities)
    },[])
    
    const addActivitytoActivities = (newActivity) => {
        fetch("http://localhost:3001/activities", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json" 
            },
            body: JSON.stringify(newActivity)
        })
        .then(res => res.json())
        .then(data => setActivities(
            [...activities, data]
        ))
    }
    return (
        <Switch>
            <Route path="/profile">
                <Profile />
            </Route>
            <Route path="/routes">
                <Routes />
            </Route>
            <Route exact path="/">
                <Home activities={activities} addActivitytoActivities={addActivitytoActivities}/>
            </Route>
        </Switch> 
    )
}
export default MainContainer;