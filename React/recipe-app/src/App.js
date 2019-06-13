import React from 'react';
import logo from './logo.svg';
import Recipe from './Recipe';

function App() {
  const recipes = [
    {
      img: logo,
      instructions: "Mix well",
      ingredients: ['a', 'b'],
      title: 'Test',
    }, {
      img: logo,
      instructions: "Mix well",
      ingredients: ['a', 'b'],
      title: 'Test',
    }, {
      img: logo,
      instructions: "Mix well",
      ingredients: ['a', 'b'],
      title: 'Test',
    },
  ];
  return (

    <div className="App">
      {
        recipes.map(r => (
          <Recipe {...r}></Recipe>
        ))
      }
    </div>
  );
}

export default App;
