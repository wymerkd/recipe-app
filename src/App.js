import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './components/Recipe';

const App = () => {

  const APP_ID = 'a05e62b8';
  const APP_KEY = '3844746ca92b67be7621b225f08c0f97';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');


  // useEffect will only run once when page is rendered
  useEffect( () => {
    getRecipes();
  }, [search]);

  // API request, waits for the response and converts to json
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
