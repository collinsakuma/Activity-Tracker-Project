import ActivityCard from "./ActivityCard";


function Home({activities}) {
    const renderActivities = activities.map(activity => (
    <div className="col" key={activity.id}>
        <ActivityCard activity={activity}/>
    </div>
    ))
    return (
        <div>
            <h1>Home</h1>
            <div className="Container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    {renderActivities}
                </div>
            </div>
        </div>
    )
}
export default Home;