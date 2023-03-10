import ActivityCard from "./ActivityCard";
import ActivityForm from "./ActivityForm";
import Filter from './Filter';


function Home({ activities,  addActivitytoActivities, showForm, sortActivities }) {    
    const renderActivities = activities.map(activity => (
    <div className="col" key={activity.id}>
        <ActivityCard activity={activity}/>
    </div>
    ))
    return (
        <div>
            {showForm ? <ActivityForm addActivitytoActivities={addActivitytoActivities}/> : null}
            <div className="container">
                <div className="row">
                    <div className="row col-auto filter-padding">
                    <Filter sortActivities={sortActivities}/>
                    </div>
                </div>
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