import React, { useEffect, useState } from "react";
import { PLANT_API, PLANT_API_SECRET_KEY } from "../utils/constants";
import PlantCard from "./PlantCard";
import ShimmerUI from "./ShimmerUI";

const Main = () => {
  const [plants, setAllPlants] = useState([]);

  async function fetchPlantData() {
    try {
      const data = await fetch(PLANT_API + PLANT_API_SECRET_KEY);
      const json = await data.json();
      setAllPlants(json.data);
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    fetchPlantData();
  }, []);

  if (!plants) return <ShimmerUI />;
  return (
    <>
      <div className="my-4 bg-[#90181E]">
        <img src="https://cdn.shopify.com/s/files/1/0646/8327/8550/files/Homepage_desktop-01.png?v=1706381413" />
      </div>

      <div className="my-8">
        <h1 className="text-3xl font-semibold text-center text-[#2E524A]">
          Shop Our Best Delight
        </h1>
        <div className="w-1/4 flex justify-evenly">
          {plants &&
            plants.map((plant) => <PlantCard key={plant.id} data={plant} />)}
        </div>
      </div>
    </>
  );
};

export default Main;
