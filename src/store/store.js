import { create } from 'zustand';

const Store = create((set) => ({
    plantList: [],
    addPlant: (plant) => set((state) => ({ plantList: [...state.plantList, plant] })),
    removePlant: (plantId) =>
        set((state) => ({
            plantList: state.plantList.filter((plant) => plant.id !== plantId),
        })),
}));

export default Store;