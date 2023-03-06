import React, { useState, useEffect } from "react";
import RouteCard from "./RouteCard";

const routeAPI = "http://localhost:3000/Routes";

function Routes() {
    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        fetch(routeAPI)
        .then(res => res.json())
        .then(setRoutes);
    }, [])

    return (
    <div>
        <h1>Routes</h1>
        <ul className="cards">{routes.map(route => <RouteCard key={route.id} route={route}/>)}</ul>
    </div>
    );
}
export default Routes;