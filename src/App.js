import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';
import { useEffect, useState } from "react";

function App() {
  const [activities, setActivities] = useState([]);
  const [showForm, setShowForm] = useState(false);
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
      <MainContainer activities={activities} addActivitytoActivities={addActivitytoActivities} showForm={showForm}/>
    </div>
  );
}

export default App;
