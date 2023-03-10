import ProfileCard from "./ProfileCard";

function KatelynProfile({activities}) {
    const renderActivitiesByProfile = activities.map(activity => (
        <div className="col" key={activity.id}>
            <ProfileCard activity={activity}/>
        </div>
        ))
        return (
        <div className="profile">
            <div className="profile-header">
                <img className="profile-image" src="https://images2.imgbox.com/3e/f4/MmGkyHGb_o.jpg" style={{height: "100px"}}></img><h2>Katelyn Luther</h2>
            </div>
            <div className="Container container-cards">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 m-3">
                {renderActivitiesByProfile}
            </div>
            </div>
        </div>
        )
}

export default KatelynProfile;