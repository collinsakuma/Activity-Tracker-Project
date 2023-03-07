import { useState } from "react";
import RunForm from "./RunForm";
import RideForm from "./RideForm";

function ActivityForm({ addActivitytoActivities }) {
    const [selected, setSelected] = useState("")
    return (
    <div>
        <h3>Add New Activity</h3>
        <select defaultValue={"DEFAULT"} onChange={(e) => setSelected(e.target.value)}>
            <option value="DEFAULT" disabled hidden>Select Activity</option>
            <option value="Run">Run</option>
            <option value="Ride">Ride</option>
        </select>
        {selected === "Run" ? <RunForm addActivitytoActivities={addActivitytoActivities}/> : null}
        {selected === "Ride" ? <RideForm addActivitytoActivities={addActivitytoActivities}/> : null}
    </div>
    )
}
export default ActivityForm;