import React from "react";
import ShimmerUI from "./ShimmerUI";

const PlantCard = ({ data }) => {
  if (!data) return <ShimmerUI />;
  return (
    <div className="">
      {data && (
        <div className="w-1/4 m-4 border border-red-600">
          <img
            className="mx-auto my-4 rounded-lg"
            src={data?.default_image?.thumbnail}
            alt="plant"
          />
          <div className="flex justify-center flex-wrap">
            <h1 className="mx-2 text-xl text-black">{data?.common_name}</h1>
            <h1 className="text-xl text-black">({data?.scientific_name})</h1>
          </div>
          <div className="flex flex-wrap justify-evenly ">
            <h4>Cycle : {data?.cycle}</h4>
            <h4>Sunlight : {data?.sunlight}</h4>
            <h4>Watering : {data?.watering}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlantCard;
