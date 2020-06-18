import React from 'react';
import './App.css';

const App = () => {

  const APP_ID = 'a05e62b8';
  const APP_KEY = '3844746ca92b67be7621b225f08c0f97';

  const recipeReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`


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
