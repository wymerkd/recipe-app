import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './components/Recipe';

const App = () => {

  const APP_ID = 'a05e62b8';
  const APP_KEY = '3844746ca92b67be7621b225f08c0f97';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');


  // useEffect will only run once when page is rendered
  useEffect( () => {
    getRecipes();
  }, [query]);

  // API request, waits for the response and converts to json
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Chicken Masala"/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            link={recipe.recipe.shareAs}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories.toString().slice(0, 6)}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
