// Your code here
import React from "react";
import { Button} from 'antd'

const FoodBox = (props) => {
  const { id,name, calories, image, servings } = props.food;
  const handleDeleteClick = () => {
    props.deleteFood(id); 
  };

  return (
    <div>
        <p>      <b style={{ fontSize: "1.5em" }}>{name}</b></p>

      <img src={image} style={{width:"200px"}}/>
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>
      <p>
        <b>Total Calories: {calories*servings} kcal</b>
      </p>
      <Button type="primary" danger onClick={handleDeleteClick}>Delete</Button>
    </div>
  );
};

export default FoodBox;