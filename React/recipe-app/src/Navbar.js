import React, { Component } from 'react';
import PropTypes from "prop-types";

import './Navbar.css';

export default class Navbar extends Component {
    static defaultProps = {
        triggerShowForm: () => {},
    }
    static propTypes = {
        triggerShowForm: PropTypes.func,
    };

    render() {
        return (
            <header>
                <h2>Recipe App</h2>
                <nav>
                    <li><a onClick={(e) => this.props.triggerShowForm()}>New Recipe</a></li>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact Us</a></li>
                </nav>
            </header>
        )
    }
}
