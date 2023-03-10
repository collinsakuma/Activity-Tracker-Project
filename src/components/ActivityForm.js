import { useState } from "react";
import RunForm from "./RunForm";
import RideForm from "./RideForm";

function ActivityForm({ addActivitytoActivities }) {
    const [selected, setSelected] = useState("")
    return (
    <div className="row d-flex justify-content-center">
        <div className="col-6 justify-content-center">
            <div className="form container border rounded form-container">
                <h5 className="form-title">New Activity</h5>
                <div className="row d-flex justify-content-center">
                    <select className="col-auto m-2 activity-select"  defaultValue={"DEFAULT"} onChange={(e) => setSelected(e.target.value)}>
                        <option value="DEFAULT" disabled hidden>Select Activity</option>
                        <option value="Run">Run</option>
                        <option value="Ride">Ride</option>
                    </select>
                </div>
                {selected === "Run" ? <RunForm addActivitytoActivities={addActivitytoActivities}/> : null}
                {selected === "Ride" ? <RideForm addActivitytoActivities={addActivitytoActivities}/> : null}
            </div>
        </div>
    </div>
    )
}
export default ActivityForm;