import React, { useEffect, useState } from "react";
import { PLANT_API, PLANT_API_SECRET_KEY } from "../utils/constants";
import PlantCard from "./PlantCard";
import ShimmerUI from "./ShimmerUI";

const Main = () => {
  const [plants, setAllPlants] = useState([]);

  const fetchPlantData = async () => {
    try {
      const data = await fetch(PLANT_API + PLANT_API_SECRET_KEY);
      const json = await data.json();
      setAllPlants(json.data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchPlantData();
  }, []);

  if (!plants.length) return <ShimmerUI />;
  return (
    <>
      <div className="my-4 bg-[#90181E]">
        <img src="https://cdn.shopify.com/s/files/1/0646/8327/8550/files/Homepage_desktop-01.png?v=1706381413" />
      </div>

      <div className="my-8">
        <h1 className="text-3xl font-semibold text-center text-[#2E524A]">
          Shop Our Best Delight
        </h1>
        <p className="text-center text-[#2E524A]">
          We have a wide range of plants to choose from. Pick your favorite now!
        </p>
      </div>
      <div className="flex flex-wrap">
        {plants.map((plant) => (
          <PlantCard key={plant.id} data={plant} />
        ))}
      </div>
      <div>
        
      </div>
    </>
  );
};

export default Main;
