import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';
import logo from './logo.svg';

import './RecipeList.css';

export default class RecipeList extends Component {
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            instructions: PropTypes.string.isRequired,
            ingredients: PropTypes.arrayOf(PropTypes.string),
            img: PropTypes.string,
        })),
    }
    static defaultProps = {
        recipes: [
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
        ],
    };

    render() {
        return (
            <div className="recipe-list">
                {
                    this.props.recipes.map(r => (
                        <Recipe {...r}></Recipe>
                    ))
                }
            </div>
        );
    }
}
