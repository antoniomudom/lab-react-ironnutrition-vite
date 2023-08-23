import { useState } from "react";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import foodsJson from "../foods.json";

const FoodList = () => {
  const [foods, setFoods] = useState(foodsJson);

  const handleDeleteFood = (id) => {
    console.log("Eliminando comida", id);
    const updatedFoods = foods.filter((food) => food.id !== id);
    setFoods(updatedFoods);
  };

  return (
    <div>
      <AddFoodForm foods={foods} setFoods={setFoods} />
      {foods.map((food, i) => (
        <FoodBox key={i} food={food} deleteFood={handleDeleteFood} />
      ))}
    </div>
  );
};

export default FoodList;
