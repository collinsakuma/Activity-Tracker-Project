import ActivityCard from "./ActivityCard";


function Home({activities}) {
    const renderActivities = activities.map(activity => <ActivityCard key={activity.id} activity={activity}/>)
    return (
        <div>
            <h1>Home</h1>
            <div className="Container">
                {renderActivities}
            </div>
        </div>
    )
}
export default Home;