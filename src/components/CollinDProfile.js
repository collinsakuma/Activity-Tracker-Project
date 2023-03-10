import ProfileCard from "./ProfileCard";

function CollinDProfile({activities}) {
    const renderActivitiesByProfile = activities.map(activity => (
        <div className="col" key={activity.id}>
            <ProfileCard activity={activity}/>
        </div>
        ))
        return (
            <div className="profile">
                <div className="profile-header">
                <img className="profile-image" alt="Collin Doss" src="https://thumbs2.imgbox.com/7a/1b/9fyUyas3_t.png" style={{height: "100px"}}></img><h2>Collin Doss</h2>
            </div>
                <div className="Container container-cards">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 m-3">
                    {renderActivitiesByProfile}
                    </div>
                </div>
            </div>
        )
}

export default CollinDProfile;