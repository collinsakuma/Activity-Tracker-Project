function ProfileCard({ activity }) {
    const {title, image, time, distance, pace, speed, movementTime, date, location, type, elevation} = activity;
    function toStandardTime(militaryTime) {
        let time = militaryTime.split(":");
      
        let hours = time[0];
        let minutes = time[1];
        let timeValue;
        if (hours > 0 && hours <= 12) {
          timeValue= "" + hours;
        } else if (hours > 12) {
          timeValue = "" + (hours - 12)
        } else if ( hours === 0) {
          timeValue = "12";
        }
        timeValue += (minutes < 10) ? ":" + minutes : ":" + minutes;
        timeValue += (hours >= 12) ? " P.M." : " A.M.";
        return timeValue;
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
        <div className="card col-12 display:flex m-1 p-0 h-100">
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
                <div className="profilecard-body">
                    <p><b className="card-font-weight">Movement Time:</b> {convertMovementTime(movementTime)}</p>
                </div>
                <div className="profilecard-body">
                <p><b className="card-font-weight">{pace !== null ? "Pace:" : "Average Speed:"}</b> {pace !== null ? pace : speed}{pace !== null ? " /mi" : " mph"}</p>
                </div>
                <div className="profilecard-body align-left">
                    <p><b className="card-font-weight">Distance:</b> {distance} miles</p>
                </div>
                <div className="profilecard-body-bottom align-left">
                    <p><b className="card-font-weight">Elevation:</b> {elevation}'</p>
                </div>
            </div>
        </div>
    )
  }
  export default ProfileCard;