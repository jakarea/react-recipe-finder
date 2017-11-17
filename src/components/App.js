import React, { Component } from 'react';
import SearchRecipes from './SearchRecipes';
import RecipeList from './RecipeList';

import '../assets/css/index.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title text-center">Welcome to Recipe Finder</h1>
        </header>
      	<SearchRecipes />
        <RecipeList />
      </div>
      
      
    );
  }
}

export default App;
