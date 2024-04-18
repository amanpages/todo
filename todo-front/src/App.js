import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState('');

  // Function to fetch todos from the server and update state
  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://localhost:3001/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  // Function to add a new todo
  const addTodo = async () => {
    if (!todoText) {
      alert('Please enter a todo');
      return;
    }

    try {
      await axios.post('http://localhost:3001/todos', { text: todoText });
      setTodoText(''); // Clear the input field after adding todo
      fetchTodos(); // After adding a new todo, fetch todos again to update the list
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  // Function to delete a todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/todos/${id}`);
      fetchTodos(); // After deleting a todo, fetch todos again to update the list
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  // Fetch todos from the server when component mounts
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form
        className="form-container"
        onSubmit={(e) => {
          e.preventDefault();
          addTodo();
        }}
      >
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul className="todo-list">
        {/* Render the list of todos */}
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.text}
            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
