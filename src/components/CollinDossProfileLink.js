import CollinDProfile from "./CollinDProfile";

function CollinDossProfileLink({ activities }) {
    return (
        <CollinDProfile activities={activities.filter(activity => activity.profile === "Collin Doss")}/>
    )
}
export default CollinDossProfileLink;