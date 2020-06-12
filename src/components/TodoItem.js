import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class TodoItem extends Component {

    getStyle = () => {
        return {
            backgroundColor: 'rgba(243, 102, 102, 0.705)',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            borderBottom: '1px #ccc dotted',
            padding: '10px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }
    }

    

    render() {
        const { id, todoToEdit } = this.props.todo;
        console.log('from TodoItem', todoToEdit, id);
        return (
            <div>
                <div style={this.getStyle()}>
                    <input type='checkbox' id='checkbox' onChange={this.props.markComplete.bind(this, id)}></input>
                    <p> {this.props.todo.title} </p> 
                    <div>
                        <span className='pointer' onClick={this.props.delTodo.bind(this, id)}> <FontAwesomeIcon icon="trash" style={{marginRight: '20px', color:'red'}}/> </span>
                        <span className='pointer' onClick={this.props.editTodo.bind(this, id)}> <FontAwesomeIcon icon="pen-alt" color='blue' /> </span>
                    </div>
                </div>            
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo : PropTypes.object.isRequired
}
