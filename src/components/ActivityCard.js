function ActivityCard({ activity }) {
    const {title, image, time, distance, pace, speed} = activity;
    return (
        <div className="card" style={{width: "300px"}}>
            <h2>{title}</h2>
            <img className="card-img" src={image} alt={title}/>
            <p>Time: {time}</p>
            <p>Distance: {distance} miles</p>
        </div>
    )
}
export default ActivityCard;