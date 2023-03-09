function RouteCard({route}) {
  return (
    <div className="card h-100">
      <div className="card-header">
        <div className="runner-header">
         <p><b className="card-font-weight">{route.description} - {route.type}</b></p>
      </div>
      </div>
      <img className="card-img-top" src={route.image} alt={route.description}/>
      <div className="card-body">
      <div className="runner-body">
          <p><b className="card-font-weight">Location: </b>{route.location}</p></div>
        <div className="runner-body">
          <p><b className="card-font-weight">Distance: </b>{route.distance}</p></div>
        <div className="runner-body">
          <p><b className="card-font-weight">Elevation Gain: </b>{route.elevation}</p></div>
        <div className="runner-body">
          <p><b className="card-font-weight">Difficulty: </b> {route.difficulty}</p></div>
      </div>
    </div>
  );
}

export default RouteCard;