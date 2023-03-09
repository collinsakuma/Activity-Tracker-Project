function RouteCard({route}) {
  return (
    <div className="card" style={{width: "350px", height: "350px"}}>
      <h4>{route.description} - {route.type}</h4>
      <img src={route.image} alt={route.description} style={{height: "200px"}}/>
      <p><b className="card-font-weight">Distance: </b>{route.distance}</p>
      <p><b className="card-font-weight">Elevation Gain: </b>{route.elevation}</p>
      <p><b className="card-font-weight">Difficulty: </b> {route.difficulty}</p>
    </div>
  );
}

export default RouteCard;