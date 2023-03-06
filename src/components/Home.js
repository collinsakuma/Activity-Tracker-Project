import ActivityCard from "./ActivityCard";


function Home({activities}) {
    const renderActivities = activities.map(activity => (
    <div className="col">
        <ActivityCard key={activity.id} activity={activity}/>
    </div>
    ))
    return (
        <div>
            <h1>Home</h1>
            <div className="Container">
                <div className="row row-cols-4">
                    {renderActivities}
                </div>
            </div>
        </div>
    )
}
export default Home;