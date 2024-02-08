import React from "react";
import Store from "../store/store";

const Cart = () => {
  const { plantData, addPlant, removePlant } = Store();
  const { plantList } = Store.getState();
  return (
    <div className=" my-2 mx-2 bg-yellow-50">
      <h1 className="text-center py-2 text-lg font-medium">Cart</h1>
      <div className="flex flex-wrap justify-center">
        {plantList.map((plant) => (
          <div key={plant.id} className="text-center m-4">
            <img src={plant.image_url} className="w-60 h-52 rounded-lg" />
            <h1>{plant.common_name}</h1>
            <h1>{plant.rank}</h1>
            <button
              className="bg-gray-400 p-1 my-2 rounded-xl px-2 hover:translate-y-1"
              onClick={() => removePlant(plant.id)}
            >
              Remove Plant
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
