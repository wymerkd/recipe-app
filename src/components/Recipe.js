import React from 'react';
import '../css/recipe.css';

const Recipe = ({ title, link, calories, image, ingredients}) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      
      <ol className="recipe-details">
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>Calories: {calories}</p>
      <a href={link}><h3>Link to full recipe</h3></a>
      <img className="image" src={image} alt=""/>
    </div>
  );
}

export default Recipe;