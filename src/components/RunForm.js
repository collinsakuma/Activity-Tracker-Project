import { useState } from "react";

function RunForm({ addActivitytoActivities }) {
    const [title, setTitle] = useState("");
    const [profile, setProfile] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [image, setImage] = useState("");
    const [movementTime, setMovementTime] = useState("");
    const [distance, setDistance] = useState("");
    const [pace, setPace] = useState("");
    const [elevation, setElevation] = useState("");
    const [location, setLocation] = useState("");

    const handleRunSubmit = (e) => {
        e.preventDefault();
        const newActivity= {
            title,
            type: "🏃",
            profile,
            date,
            time,
            image,
            movementTime,
            distance: parseFloat(distance),
            pace,
            speed: null,
            elevation,
            location,
        }
        addActivitytoActivities(newActivity)
        setTitle(""); setDate(""); setTime(""); setImage(""); setMovementTime(""); setDistance(""); setPace(""); setElevation(""); setLocation("");

    }
    return (
    <div className="container">
        <form onSubmit={handleRunSubmit} className="row">
            <div className="col-6 g-1">
                <input
                    className={"form-control"}
                    type="text"
                    name="title"
                    placeholder="Run Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="col-6 g-1">
                <select className="form-select" defaultValue={"DEFAULT"} onChange={(e) => setProfile(e.target.value)}>
                    <option value="DEFAULT" disabled hidden>Profile</option>
                    <option value="Collin Sakuma">Collin Sakuma</option>
                    <option value="Collin Doss">Collin Doss</option>
                    <option value="Katelyn Luther">Katelyn Luther</option>
                </select>
            </div>
            <div className="col-6 g-1">
                <input
                    className={"form-control"}
                    type="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div className="col-6 g-1">
                <input
                    className={"form-control"}
                    type="time"
                    name="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
            </div>
            <div className="col-6 g-1">
                <input
                    className={"form-control"}
                    type="text"
                    name="image"
                    placeholder="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
            </div>
            <div className="col-6 g-1">
                <input
                    className={"form-control"}
                    type="text"
                    name="movementTime"
                    placeholder="Run Duration"
                    value={movementTime}
                    onChange={(e) => setMovementTime(e.target.value)}
                />
            </div>
            <div className="col-6 g-1">
                <input
                    className={"form-control"}
                    type="number"
                    name="distance"
                    placeholder="Distance"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                />
            </div>
            <div className="col-6 g-1">
                <input
                    className={"form-control"}
                    type="text"
                    name="pace"
                    placeholder="Pace"
                    value={pace}
                    onChange={(e) => setPace(e.target.value)}
                />
            </div>
            <div className="col-6 g-1">
                <input
                    className={"form-control"}
                    type="number"
                    name="elevation"
                    placeholder="Elevation"
                    value={elevation}
                    onChange={(e) => setElevation(e.target.value)}
                />
            </div>
            <div className="col-6 g-1">
                <input
                    className={"form-control"}
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>
            <div className="col-12 g-2 m-1">
                <input
                    type="submit"
                    name="submit"
                    value="Add Activity"
                    className="activity-btn"
                />
            </div>
        </form>
    </div>
    )
}
export default RunForm;