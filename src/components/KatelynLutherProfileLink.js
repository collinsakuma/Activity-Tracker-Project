import KatelynProfile from "./KatelynProfile";

function KatelynLutherProfileLink({ activities }) {
    return (
        <KatelynProfile activities={activities.filter(activity => activity.profile === "Katelyn Luther")}/>
    )
}
export default KatelynLutherProfileLink;