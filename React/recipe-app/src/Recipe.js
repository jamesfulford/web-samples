import React, { Component } from 'react';
import './Recipe.css';
import PropTypes from 'prop-types';

export default class Recipe extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        instructions: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string),
        img: PropTypes.string,
        onDelete: PropTypes.func,
    };
    static defaultProps = {
        ingredients: [],
        onDelete: () => {},
    };

    render () {
        const { title, img, ingredients, instructions } = this.props;
        return (
            <div className="recipe-card">
                <div className="recipe-card-img">
                    <img src={img} alt={title} />
                </div>
                <div className="recipe-card-content">
                    <h3 className="recipe-title">{title}</h3>
                    <h4>Ingredients</h4>
                    <ul>
                        {ingredients.map((ing, i) => (
                            <li key={ing}>{ing}</li>
                        ))}
                    </ul>
                    <h4>Instructions</h4>
                    <p>
                        {instructions}
                    </p>
                    <button type="button" onClick={() => {
                        this.props.onDelete();
                    }}>Delete</button>
                </div>
            </div>
        )
    }
}
