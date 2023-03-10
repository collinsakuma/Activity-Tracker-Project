import CollinSProfile from "./CollinSProfile";

function CollinSakumaProfileLink({ activities }) {
    return (
        <CollinSProfile activities={activities.filter(activity => activity.profile === "Collin Sakuma")}/>
    )
}
export default CollinSakumaProfileLink;