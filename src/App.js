import React,{useEffect, useState} from 'react';
import './App.css';

const App = () => {

  const APP_ID = 'a05e62b8';
  const APP_KEY = '3844746ca92b67be7621b225f08c0f97';

  // useEffect will only run once when page is rendered
  useEffect( () => {
    getRecipes();
  }, []);

  // API request, waits for the response and converts to json
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data.hits);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
