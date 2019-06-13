import React from 'react';
import './App.css';
import TodoList from './TodoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Simple Todo App
        </h1>
      </header>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
