import { useState } from "react";

function RideForm({ addActivitytoActivities }) {
    const [title, setTitle] = useState("");
    const [profile, setProfile] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [image, setImage] = useState("");
    const [movementTime, setMovementTime] = useState("");
    const [distance, setDistance] = useState("");
    const [speed, setSpeed] = useState("");
    const [elevation,setElevation] = useState("");
    
    const handleRunSubmit = (e) => {
        e.preventDefault();
        const newActivity= {
            title,
            type: "🚴",
            profile,
            date,
            time,
            image,
            movementTime,
            distance: parseFloat(distance),
            pace: null,
            speed: parseFloat(speed),
            elevation: parseFloat(elevation),
        }
        addActivitytoActivities(newActivity)
    }
    return (
        <div className="container">
        <form onSubmit={handleRunSubmit} className="row">
            <div className="col-6">
                <input
                    className={"form-control"}
                    type="text"
                    name="title"
                    placeholder="Ride Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="col-6">
                <select className="form-select" defaultValue={"DEFAULT"} onChange={(e) => setProfile(e.target.value)}>
                    <option value="DEFAULT" disabled hidden>Profile</option>
                    <option value="Collin Sakuma">Collin Sakuma</option>
                    <option value="Collin Doss">Collin Doss</option>
                    <option value="Katelyn Luther">Katelyn Luther</option>
                </select>
            </div>
            <div className="col-6">
                <input
                    className={"form-control"}
                    type="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div className="col-6">
                <input
                    className={"form-control"}
                    type="time"
                    name="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
            </div>
            <div className="col-6">
                <input
                    className={"form-control"}
                    type="text"
                    name="image"
                    placeholder="Image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
            </div>
            <div className="col-6">
                <input
                    className={"form-control"}
                    type="number"
                    name="movementTime"
                    placeholder="Ride Duration"
                    value={movementTime}
                    onChange={(e) => setMovementTime(e.target.value)}
                />
            </div>
            <div className="col-6">
                <input
                    className={"form-control"}
                    type="number"
                    name="distance"
                    placeholder="Distance"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                />
            </div>
            <div className="col-6">
                <input
                    className={"form-control"}
                    type="number"
                    name="speed"
                    placeholder="Speed"
                    value={speed}
                    onChange={(e) => setSpeed(e.target.value)}
                />
            </div>
            <div className="col-6">
                <input
                    className={"form-control"}
                    type="number"
                    name="elevation"
                    placeholder="Elevation"
                    value={elevation}
                    onChange={(e) => setElevation(e.target.value)}
                />
            </div>
            <div className="col-12">
                <input
                    type="submit"
                    name="submit"
                    value="Add Activity"
                    className="btn btn-primary"
                />
            </div>
        </form>
    </div>
    )
}
export default RideForm;