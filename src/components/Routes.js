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
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">{routes.map(route => <RouteCard key={route.id} route={route}/>)}</div>
        </div>
    </div>
    );
}
export default Routes;