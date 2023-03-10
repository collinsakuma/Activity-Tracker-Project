function Filter({ sortActivities}) {
    return (   
        <select className="activity-select" onChange={(e) => sortActivities(e)}>
            <option disabled hidden>Filter</option>
            <option>Distance</option>
            <option>Date</option>
        </select>
    )
}
export default Filter;