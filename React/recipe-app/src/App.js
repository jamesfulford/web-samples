import React, {Component} from 'react';
import RecipeList from './RecipeList';
import Navbar from './Navbar';
import RecipeInput from './RecipeInput';

import logo from './logo.svg';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      nextRecipeId: 3,
      recipes: [
        {
          id: 0,
          img: logo,
          instructions: "Mix well",
          ingredients: ['a', 'b'],
          title: 'Test 1',
        }, {
          id: 1,
          img: logo,
          instructions: "Mix well",
          ingredients: ['a', 'b'],
          title: 'Test 2',
        }, {
          id: 2,
          img: logo,
          instructions: "Mix well",
          ingredients: ['a', 'b'],
          title: 'Test 3',
        },
      ],
    };
  }

  render() {
    return (
      <>
        <Navbar triggerShowForm={() => {
          this.setState({ showForm: true });
        }}/>
        {
          this.state.showForm
            ? <RecipeInput
                onSave={(recipe) => {
                  this.setState({
                    recipes: [...this.state.recipes, { ...recipe, id: this.state.nextRecipeId }],
                    nextRecipeId: this.state.nextRecipeId + 1,
                    showForm: false,
                  });
                }}
                onClose={() => {
                  this.setState({ showForm: false });
                }}
              />
            : null
        }
        <RecipeList
          recipes={this.state.recipes}
          onDelete={(id) => {
            this.setState({
              recipes: this.state.recipes.filter(r => r.id !== id),
            });
          }}
        />
      </>
    );
  }
}
