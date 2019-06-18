import React from 'react';
import TodoList from './TodoList';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        Todos Redux
      </header>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
