function ActivityCard({ activity }) {
    const {title, image, time, distance, pace, speed, movementTime, profile, date, location, type} = activity;
    function toStandardTime(militaryTime) {
        militaryTime = militaryTime.split(':');
        return (militaryTime[0].charAt(0) == 1 && militaryTime[0].charAt(1) > 2) ? (militaryTime[0] - 12) + ':' + militaryTime[1] + ' P.M.' : militaryTime.join(':') + ' A.M.'
    }
    
    return (
        <div className="card" style={{width: "350px", height: "350px"}}>
            <p>{type} {profile}-<b>{title}</b></p>
            <p>{toStandardTime(time)}</p>
            <img className="card-img" src={image} alt={title} style={{width:"300", height: "200px"}}/>
            <p><b>Movement Time:</b> {movementTime}</p>
            <p>Distance: {distance} miles</p>
        </div>
    )
  }
  export default ActivityCard;