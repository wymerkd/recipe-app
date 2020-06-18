import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const APP_ID = 'a05e62b8';
  const APP_KEY = '3844746ca92b67be7621b225f08c0f97';

  const recipeReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`


  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
