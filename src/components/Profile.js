import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import CollinDProfile from "./CollinDProfile";
import CollinSProfile from "./CollinSProfile";
import KatelynProfile from "./KatelynProfile";


function Profile({activities}) {
    const [selected, setSelected] = useState("");

        return (
            <div>
                <select defaultValue={"DEFAULT"} onChange={(e) => setSelected(e.target.value)}>
                    <option value="">--Choose an option--</option>
                    <option value="collin-doss">Collin Doss</option>
                    <option value="collin-sakuma">Collin Sakuma</option>
                    <option value="katelyn-luther">Katelyn Luther</option>
                </select>
                {selected === "collin-doss" ? <CollinDProfile activities={activities.filter(activity => activity.profile === "Collin Doss")}/> : null }
                {selected === "collin-sakuma" ? <CollinSProfile activities={activities.filter(activity => activity.profile === "Collin Sakuma")}/> : null }
                {selected === "katelyn-luther" ? <KatelynProfile activities={activities.filter(activity => activity.profile === "Katelyn Luther")}/> : null }
            </div>
        )
}
export default Profile;

// const renderActivitiesByProfile = activities.filter(activity => activity.profile = "activity.profile").map(activity => (
//     <div className="col" key={activity.id}>
//         <ActivityCard activity={activity}/>
//     </div>
//     ))