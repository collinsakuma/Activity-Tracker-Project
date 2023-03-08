function ProfileCard({ activity }) {
    const {title, image, time, distance, pace, speed, movementTime, profile, date, location, type} = activity;
    function toStandardTime(militaryTime) {
        militaryTime = militaryTime.split(':');
        return (militaryTime[0].charAt(0) == 1 && militaryTime[0].charAt(1) > 2) ? (militaryTime[0] - 12) + ':' + militaryTime[1] + ' P.M.' : militaryTime.join(':') + ' A.M.'
    }
    
    return (
        <div className="card h-100">
            <img className="card-img-top" src={image} alt={title} />
            <div className="card-body">
                <p className="card-title">{type} {profile}-<b>{title}</b></p>
                <p>{location}</p>
                <p>{toStandardTime(time)}</p>
                <p><b>Movement Time:</b> {movementTime}</p>
                <p>Distance: {distance} miles</p>
            </div>
        </div>
    )
  }
  export default ProfileCard;