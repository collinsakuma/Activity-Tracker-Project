import { useState } from "react";
import ActivityCard from "./ActivityCard";
import ActivityForm from "./ActivityForm";


function Home({activities}) {
    const [showForm, setShowForm] = useState(false);
    
    const formToggle = () => {
        setShowForm(!showForm)
    }
    const renderActivities = activities.map(activity => (
    <div className="col" key={activity.id}>
        <ActivityCard activity={activity}/>
    </div>
    ))
    return (
        <div>
            <h1>Home</h1>
            {showForm ? <ActivityForm /> : null}
            <div className="button">
                <button onClick={formToggle}>Add Activity</button>
            </div>
            <div className="Container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    {renderActivities}
                </div>
            </div>
        </div>
    )
}
export default Home;