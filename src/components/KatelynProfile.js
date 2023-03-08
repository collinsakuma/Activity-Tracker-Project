import ProfileCard from "./ProfileCard";

function KatelynProfile({activities}) {
    const renderActivitiesByProfile = activities.map(activity => (
        <div className="col" key={activity.id}>
            <ProfileCard activity={activity}/>
        </div>
        ))
        return (
            <div className="Container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {renderActivitiesByProfile}
            </div>
        </div>
        )
}

export default KatelynProfile;