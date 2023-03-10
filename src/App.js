import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';
import { useEffect, useState } from "react";

function App() {
  const [activities, setActivities] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [sortBy, setSortBy] = useState("");

  const sortActivities = (e) => {
    setSortBy(e.target.value)
  }

  useEffect(() => {
    if(sortBy === "Distance") {
      const sortedActivities = sortByDistance()
      setActivities(sortedActivities)
    }
    if(sortBy === "Date") {
      const sortedActivities = sortByDate()
      setActivities(sortedActivities)
    }
    if(sortBy === "Filter") {
      setActivities([...activities])
    }
  },[sortBy])
  
  const sortByDistance = () => {
    return [...activities].sort(function (a, b) {
      return a.distance - b.distance;
    });
  }

  const sortByDate = () => {
    return [...activities].sort(function(a, b) {
      return new Date(b.date) - new Date(a.date);
    })
  }


  const formToggle = () => {
      setShowForm(!showForm)
  }

  useEffect(() => {
      fetch("http://localhost:3001/activities")
          .then(res => res.json())
          .then(setActivities)
  },[])
  
  const addActivitytoActivities = (newActivity) => {
      fetch("http://localhost:3001/activities", {
          method: "POST",
          headers: {
              "Content-Type": "Application/json" 
          },
          body: JSON.stringify(newActivity)
      })
      .then(res => res.json())
      .then(data => setActivities(
          [...activities, data]
      ))
  }
  return (
    <div className="App">
      <Header />
      <NavBar formToggle={formToggle}/>
      <MainContainer activities={activities} addActivitytoActivities={addActivitytoActivities} showForm={showForm} sortActivities={sortActivities}/>
    </div>
  );
}

export default App;
