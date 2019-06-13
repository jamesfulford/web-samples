import React, { Component } from "react";

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            todos: [],
        };
    }

    render () {
        return (
            <div>
                <form onSubmit={e => {
                    e.preventDefault();
                    this.setState({
                        todos: [...this.state.todos, this.state.text],
                        text: '',
                    });
                }}>
                    <input
                        type="text"
                        placeholder="What needs to be done?"
                        value={this.state.text}
                        onChange={(e) => { this.setState({ text: e.target.value })}}
                    />
                </form>
                <ol>
                    {this.state.todos.map(t => (<li>{t}</li>))}
                </ol>
            </div>
        )
    }
}
