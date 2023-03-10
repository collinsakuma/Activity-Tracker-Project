function ProfileCard({ activity }) {
    const {title, image, time, distance, pace, speed, movementTime, profile, date, location, type, elevation} = activity;
    function toStandardTime(militaryTime) {
        militaryTime = militaryTime.split(':');
        return (militaryTime[0].charAt(0) == 1 && militaryTime[0].charAt(1) > 2) ? (militaryTime[0] - 12) + ':' + militaryTime[1] + ' P.M.' : militaryTime.join(':') + ' A.M.'
    }
    function convertMovementTime(time) {
        const newTime = time.split(":")
        if(newTime.length === 3) {
          return(`${newTime[0]}h ${newTime[1]}m ${newTime[2]}s`)
        }
        if(newTime.length === 2) {
          return(`${newTime[0]}m ${newTime[1]}s`)
        }
      }
    return (
        <div className="card col-12 display:flex m-1 p-0">
            <div className="card-header">
                <div className="runner-header">
                    <p>{type}</p><b>{title}</b>
                </div>
                <div className="date-time">
                    {date} at {toStandardTime(time)}
                </div>
                <div className="date-time">
                    {location}
                </div>
            </div>
            <img className="card-img-top" src={image} alt={title} />
            <div className="card-body">
                <div className="runner-body">
                    <p><b className="card-font-weight">Movement Time:</b> {convertMovementTime(movementTime)}</p>
                </div>
                <div className="runner-body">
                <p><b className="card-font-weight">{pace !== null ? "Pace:" : "Average Speed:"}</b> {pace !== null ? pace : speed}{pace !== null ? " /mi" : " mph"}</p>
                </div>
                <div className="runner-body align-left">
                    <p><b className="card-font-weight">Distance:</b> {distance} miles</p>
                </div>
                <div className="runner-body align-left">
                    <p><b className="card-font-weight">Elevation:</b> {elevation}'</p>
                </div>
            </div>
        </div>
    )
  }
  export default ProfileCard;