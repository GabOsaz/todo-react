import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

 class Todos extends Component {
    render() {
        return this.props.todos.map(todo => (
            <TodoItem 
            key={todo.id} 
            todo={todo} 
            markComplete={this.props.markComplete}
            delTodo = {this.props.delTodo}
            editTodo = {this.props.editTodo}
            todoToEdit = {this.props.todoToEdit}
            addTodo = {this.props.addTodo}
            />
        ))
    }
}

Todos.propTypes = {
    todos : PropTypes.array.isRequired,
    // markComplete : PropTypes.function.isRequired
}

export default Todos