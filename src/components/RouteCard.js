function RouteCard({route}) {
  return (
    <div className="card" style={{width: "350px", height: "350px"}}>
      <h3>{route.description}</h3>
      <img src={route.image} alt={route.description} style={{height: "200px"}}/>
      <h4>Distance: {route.distance}</h4>
      <h4>Elevation Gain: {route.elevation}</h4>
      <h4>Difficulty: {route.difficulty}</h4>
    </div>
  );
}

export default RouteCard;