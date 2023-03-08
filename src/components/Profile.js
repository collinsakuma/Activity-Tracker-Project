import React, { useState } from "react";
import ActivityCard from "./ActivityCard";


function Profile({activities}) {
    const renderActivitiesByProfile = activities.filter(activity => activity.profile === "Collin Doss").map(activity => (
        <div className="col" key={activity.id}>
            <ActivityCard activity={activity}/>
        </div>
        ))
        return (
            <div>
                <h1>Profile</h1>
                <label for="profiles">Select a profile:</label>
                <select name="profiles" id="profiles">
                    <option value="">--Choose an option--</option>
                    <option value="collin-doss">Collin Doss</option>
                    <option value="collin-sakuma">Collin Sakuma</option>
                    <option value="katelyn-luther">Katelyn Luther</option>
                </select>
                <div className="Container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                        {renderActivitiesByProfile}
                    </div>
                </div>
            </div>
        )
}
export default Profile;

// const renderActivitiesByProfile = activities.filter(activity => activity.profile = "activity.profile").map(activity => (
//     <div className="col" key={activity.id}>
//         <ActivityCard activity={activity}/>
//     </div>
//     ))