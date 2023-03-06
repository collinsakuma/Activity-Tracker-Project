function ActivityCard({ activity }) {
    const {title, image, time, distance, pace, speed} = activity;
    return (
        <div className="card activityCard" style={{width: "350px", height: "350px"}}>
            <h2>{title}</h2>
            <img className="card-img" src={image} alt={title} style={{width:"300", height: "200px"}}/>
            <p>Time: {time}</p>
            <p>Distance: {distance} miles</p>
        </div>
    )
}
export default ActivityCard;