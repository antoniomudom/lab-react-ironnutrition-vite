// Your code here
import  { useState } from "react";
import React from 'react';
import { Button} from 'antd';





function AddFoodForm(props) {
    //1º creo estados para almacenar los valores de cada campo del form

  const [nameInput, setNameInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [caloriesInput, setCaloriesInput] = useState(0);
  const [servingsInput, setServingsInput] = useState(1);
//Sección  de funciones que controlan los cambios en los campos del form

  const handleNameChange = (event) => {

console.log("cambiando nombre", event.target.value)

    setNameInput(event.target.value);

  };

  const handleImageChange = (event) => {
    console.log("otra fotito por aquí", event.target.value)

    setImageInput(event.target.value);
  };

  const handleCaloriesChange = (event) => {
    console.log("Para calor el que tengo yo", event.target.value);

    setCaloriesInput(event.target.value);
  };


  const handleServingsChange = (event) => {



    setServingsInput(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log("mandando el form")
    const newFood = {
      name: nameInput,
      image: imageInput,
      calories: caloriesInput,
      servings: servingsInput,
    };
    //hago una copia con el clone de las comidas y agregamos la nueva comida
    let clone = [...props.foods];
    clone.unshift(newFood);
    props.setFoods(clone);//actualizo la nueva lista de alimentos
    console.log("El nuevo alimento a crear es:", newFood);
    //limpio los campos del form
    setNameInput("");
    setImageInput("");
    setCaloriesInput(0);
    setServingsInput(1);
  };

  return (
    <div>
      <h4>Add Food Entry</h4>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          onChange={handleNameChange}
          value={nameInput}
        />
        <br />
        <label htmlFor="image">Imagen</label>
        <input
          type="text"
          name="image"
          onChange={handleImageChange}
          value={imageInput}
        />
        <br />
        <label htmlFor="calories">Calorías</label>
        <input
          type="number"
          name="calories"
          onChange={handleCaloriesChange}
          value={caloriesInput}
        />
        <br />
        <label htmlFor="servings">Porciones</label>
        <input
          type="number"
          name="servings"
          onChange={handleServingsChange}
          value={servingsInput}
        />
        <br />
        <Button type="primary"htmlType="submit">Agregar</Button>
      </form>
    </div>
  );
}

export default AddFoodForm;
