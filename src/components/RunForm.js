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
            elevation: null
        }
        addActivitytoActivities(newActivity)
        setTitle(""); setDate(""); setTime(""); setImage(""); setMovementTime(""); setDistance(""); setPace(""); 

    }
    return (
    <div className="container">
        <form onSubmit={handleRunSubmit} className="row">
            <div className="col-6">
                <input
                    className={"form-control"}
                    type="text"
                    name="title"
                    placeholder="Run Title"
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
                    placeholder="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
            </div>
            <div className="col-6">
                <input
                    className={"form-control"}
                    type="text"
                    name="movementTime"
                    placeholder="Run Duration"
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
                    type="text"
                    name="pace"
                    placeholder="Pace"
                    value={pace}
                    onChange={(e) => setPace(e.target.value)}
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
export default RunForm;