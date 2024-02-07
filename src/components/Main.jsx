import React, { useEffect, useState } from "react";
import { PLANT_API, PLANT_API_TOKEN } from "../utils/constants";
import PlantCard from "./PlantCard";
import ShimmerUI from "./ShimmerUI";

const Main = () => {
  const [plants, setAllPlants] = useState([]);
  const [page, setPage] = useState(1);

  const fetchPlantData = async () => {
    try {
      const data = await fetch(PLANT_API + PLANT_API_TOKEN + "&page=" + page);
      const json = await data.json();
      setAllPlants(json.data);
      console.log(json);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchPlantData();
  }, [page]);

  const selectHandler = (i) => {
    if (page >= 1 && page <= plants.length && page !== i) setPage(i);
    console.log(i, plants.length);
  };

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

      {plants.length > 0 && (
        <div className="text-center my-4">
          <span
            className={page === 1 ? "hidden" : "inline-block"}
            onClick={() => selectHandler(page - 1)}
          >
            ◀️
          </span>
          {[...Array(Math.ceil(plants.length))].map((_, i) => (
            <span
              className={`p-1 m-1 cursor-pointer ${
                page === i + 1 ? " bg-black text-white rounded-xl" : ""
              } `}
              key={i}
              onClick={() => selectHandler(i + 1)}
            >
              {i + 1}
            </span>
          ))}
          <span
            className={page === 20 ? "hidden" : "inline-block"}
            onClick={() => selectHandler(page + 1)}
          >
            ▶️
          </span>
        </div>
      )}
    </>
  );
};

export default Main;
