import { useEffect, useState } from "react";

function Home() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/activities")
            .then(res => res.json())
            .then(setActivities)
    },[])
    const renderActivities = activities.map(activity => (
        <div key={activity.id}>
            <img src={activity.image} alt=""/>
        </div>
    ))
    return (
        <div>
            <h1>Home</h1>
            {renderActivities}
        </div>
    )
}
export default Home;