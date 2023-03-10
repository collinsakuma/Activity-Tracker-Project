import { useState } from "react";
import ActivityCard from "./ActivityCard";
import ActivityForm from "./ActivityForm";


function Home({ activities,  addActivitytoActivities, showForm }) {
    const renderActivities = activities.map(activity => (
    <div className="col" key={activity.id}>
        <ActivityCard activity={activity}/>
    </div>
    ))
    return (
        <div>
            {showForm ? <ActivityForm addActivitytoActivities={addActivitytoActivities}/> : null}
            <div className="button">
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 m-1">
                    {renderActivities}
                </div>
            </div>
        </div>
    )
}
export default Home;