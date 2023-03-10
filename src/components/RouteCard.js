function RouteCard({route}) {
  return (
    <div className="col">
      <div className="card display:flex m-1 p-0">
        <div className="card-header">
          <p><b className="card-font-weight">{route.description} - {route.type}</b></p>
          <p className="card-font-weight"  style={{color: "#fc5200"}}>{route.location}</p>
        </div>
        <img className="card-img-top" src={route.image} alt={route.description}/>
        <div className="card-body">
          <div className="runner-body">
            <p><b className="card-font-weight">Distance: </b>{route.distance} miles</p></div>
          <div className="runner-body">
            <p><b className="card-font-weight">Elevation Gain: </b>{route.elevation}'</p></div>
          <div className="runner-body">
            <p><b className="card-font-weight">Difficulty: </b> {route.difficulty}</p></div>
        </div>
      </div>
    </div>
  );
}

export default RouteCard;