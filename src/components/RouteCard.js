import React from "react";

function RouteCard({route}) {
  return (
    <li className="card">
      <h3>{route.description}</h3>
      <img src={route.image} alt={route.description} width="200"/>
      <h4>Distance: {route.distance}</h4>
      <h4>Elevation Gain: {route.elevation}</h4>
      <h4>Difficulty: {route.difficulty}</h4>
    </li>
  );
}

export default RouteCard;