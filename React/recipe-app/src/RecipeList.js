import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';

import './RecipeList.css';

export default class RecipeList extends Component {
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            instructions: PropTypes.string.isRequired,
            ingredients: PropTypes.arrayOf(PropTypes.string),
            img: PropTypes.string,
        })),
        onDelete: PropTypes.func,
    }
    static defaultProps = {
        recipes: [],
        onDelete: () => {},
    };

    render() {
        return (
            <div className="recipe-list">
                {
                    this.props.recipes.map(r => (
                        <Recipe key={r.id} {...r} onDelete={() => {
                            this.props.onDelete(r.id);
                        }}></Recipe>
                    ))
                }
            </div>
        );
    }
}
