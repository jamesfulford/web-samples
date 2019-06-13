import React, {Component} from 'react';
import RecipeList from './RecipeList';
import Navbar from './Navbar';

import logo from './logo.svg';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 1,
          img: logo,
          instructions: "Mix well",
          ingredients: ['a', 'b'],
          title: 'Test',
        }, {
          id: 2,
          img: logo,
          instructions: "Mix well",
          ingredients: ['a', 'b'],
          title: 'Test',
        }, {
          id: 3,
          img: logo,
          instructions: "Mix well",
          ingredients: ['a', 'b'],
          title: 'Test',
        },
      ],
    };
  }

  render() {
    return (
      <>
        <Navbar></Navbar>
        <RecipeList recipes={this.state.recipes}/>
      </>
    );
  }
}
