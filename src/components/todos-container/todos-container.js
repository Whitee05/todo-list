import React, { Component } from "react";
import TodosItem from "./todos-item";

import './todos-container.sass';

class Todos extends Component {
  state = {
    todos: []
  }

  generateKey = () => Math.random().toString(36).substr(6);

  onComplete = (key) => {
    this.setState(({ todos }) => ({
      todos: todos.map(item => {
        if (item.key === key) {
          return { ...item, completed: true };
        }
        return item;
      })
    }));
  }

  createTodosItem = (e) => {
    if (e.which === 13 || e.key === 'Enter' || e.code==='Enter') {
      const inputValue = e.target.value;
      e.target.value = '';
      const newTodoItem = {
        content: inputValue,
        active: true,
        key: this.generateKey()
      };

      this.setState(prevState => ({
        todos: [...prevState.todos, newTodoItem]
      }));
    }
  }

  onDelete = (key) => {
    this.setState(({ todos }) => ({
      todos: todos.filter(item => item.key !== key)
    }));
  }

  render() {
    const { todos } = this.state;

    const todoList = (todos.length > 0) ? todos.map(item => (
      <TodosItem
        content={item.content}
        active={item.active}
        key={item.key}
        id={item.key}
        onComplete={this.onComplete}
        onDelete={this.onDelete}
      />
    )) : [];

    return (
      <View todos={todoList} createTodosItem={this.createTodosItem} />
    )
  }
}

const View = ({ todos, createTodosItem }) => {
  return (
    <div className="todos">
      <div className="todos__input-field">
        <input
          type="text"
          className="input-field"
          placeholder="What needs to be done?"
          onKeyDown={createTodosItem}
        />
      </div>
      {todos}
    </div>
  )
}

export default Todos;
