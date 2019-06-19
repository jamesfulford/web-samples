import React from 'react';
import TodoList from './TodoList';
import './App.css';
import { Link, Route, Redirect } from 'react-router-dom';
import TodoForm from './TodoForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">Todos Redux</header>
      <p>
        <Link to="/todos">Todos</Link>
      </p>
      <p>
        <Link to="/todos/new">Add Todos</Link>
      </p>

      <Route path="/todos/new" component={TodoForm} />
      <Route path="/todos" component={TodoList} />
      <Route exact path="/" render={() => <Redirect to="/todos" />} />
    </div>
  );
}

export default App;
