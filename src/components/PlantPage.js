import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(r=>r.json())
    .then(data=>setPlants(data))
  },[])

  function handleAdd(newPlant) {
    setPlants([...plants, newPlant])
  }
  const searchedPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))
   
  return (
    <main>
      <NewPlantForm onAddPlant={handleAdd}/>
      <Search search={search} onHandleSearch={setSearch}/>
      <PlantList plants={searchedPlants}/>
    </main>
  );
}

export default PlantPage;
