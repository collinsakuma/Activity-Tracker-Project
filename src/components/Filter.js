function Filter({ sortActivities}) {
    return (   
        <select className="activity-select" defaultValue={"DEFAULT"} onChange={(e) => sortActivities(e)}>
            <option value="DEFAULT" disabled hidden>Filter</option>
            <option>Distance</option>
            <option>Date</option>
        </select>
    )
}
export default Filter;