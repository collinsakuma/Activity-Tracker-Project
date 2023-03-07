import React, { useState, useEffect } from "react";
import RouteCard from "./RouteCard";

const routeAPI = "http://localhost:3001/Routes";

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
        <div className="container">
            <div className="row row-cols-4">{routes.map(route => <RouteCard key={route.id} route={route}/>)}</div>
        </div>
    </div>
    );
}
export default Routes;