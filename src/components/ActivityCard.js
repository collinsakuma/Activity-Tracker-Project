function ActivityCard({ activity }) {
    const {title, image, time, distance, pace, speed, movementTime, profile, date, location, type} = activity;
    return (
        <div className="card" style={{width: "350px", height: "350px"}}>
            <p>{type} {profile}-<b>{title}</b></p>
            <img className="card-img" src={image} alt={title} style={{width:"300", height: "200px"}}/>
            <p><b>Movement Time:</b> {movementTime}</p>
            <p>Distance: {distance} miles</p>
        </div>
    )
  }
  export default ActivityCard;