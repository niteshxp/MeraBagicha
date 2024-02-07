import React from "react";
import ShimmerUI from "./ShimmerUI";

const PlantCard = ({ data }) => {
  if (!data) return <ShimmerUI />;
  return (
    <div className="bg-lime-100">
      {data && (
        <div className="w-96 m-4 bg-green-50 rounded-lg py-1">
          <img
            className="w-full h-52 bg-cover mx-auto my-4 rounded-lg"
            src={data?.image_url}
            alt="plant"
          />
          <div className="text-center">
            <h1 className="mx-2 text-xl text-black">{data?.common_name}</h1>
            <h1 className="text-xl text-black">({data?.scientific_name})</h1>
          </div>
          <div className="text-center">
            <h4>Family : {data?.family}</h4>
            <h4>Genus : {data?.genus}</h4>
            <h4>Rank : {data?.rank}</h4>
          </div>
          <span className="block my-2 mx-32 bg-gray-200 p-2 rounded-lg hover:bg-gray-400">
            ADD TO CART
          </span>
        </div>
      )}
    </div>
  );
};

export default PlantCard;
