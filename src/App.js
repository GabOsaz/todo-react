import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faTrash, faPenAlt } from '@fortawesome/free-solid-svg-icons';
import {v4 as uuidv4} from 'uuid'
import AddTodo from './components/AddTodo';

library.add( faCheckSquare, faTrash, faPenAlt)


export default class App extends Component {
  state = {
    todo: '',
    todos : [
      {
        id : 1,
        title : 'first task',
        completed : false
      },
      {
        id : 2,
        title : 'second task',
        completed : false
      },
      {
        id : 3,
        title : 'third task',
        completed : true
      }
    ]
  }

  markComplete = (id) => {
    this.setState({
      todos : this.state.todos.map( todo => {
        if( id === todo.id) {
           todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  delTodo = (id) => {
    this.setState({ todos: this.state.todos.filter( todo => {
      if(id !== todo.id) {
        return todo
      }
      return
    })})
  }

  addTodo = (title) => {
    const newTodo = {
      id : uuidv4(),
      title,
      completed : false
    }
    const updatedTodoList = [ ...this.state.todos, newTodo];
    console.log(updatedTodoList)
    this.setState({
      todos : updatedTodoList,
      todo : ''
    })
  }

  editTodo = (id) => {
    const filteredTodo = this.state.todos.filter(todo => todo.id !== id);
    const selectedTodo = this.state.todos.find(todo => todo.id === id);
    this.setState({
      todos: filteredTodo,
      todo: selectedTodo.title
    });
  }

  render() {
    console.log('from App.js', this.state.todo, this.state)
    return (
      <div className="App">
        <div className = 'container'>
          < Header />
          < AddTodo 
            addTodo = {this.addTodo} 
            todoToEdit = {this.state.todo}
          />
          < hr />
          < Todos className='overlay'
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo = {this.delTodo}
            editTodo = {this.editTodo}
            todoToEdit = {this.state.todo}
            addTodo = {this.addTodo}
          />
        </div>
    </div>
    )
  }
}


