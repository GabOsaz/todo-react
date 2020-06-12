import React, { Component } from 'react'

export default class AddTodo extends Component {
    state = {
        title : ''
    }

    componentDidUpdate(prevProps) {
        if(this.props.todoToEdit !== prevProps.todoToEdit) {
            this.setState({ title: this.props.todoToEdit})
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        const title = this.state.title;
        this.props.addTodo(title);
        this.setState({ title : '' })
    }

    render() {
        return (
            <form style = {{display:'flex'}} onSubmit = {this.onSubmit}>
                <input 
                type = 'text'
                placeholder = 'Add Todo...'
                name = 'title'
                style = {{flex : '10', padding : '5px'}}
                value = {this.state.title}
                onChange = {this.onChange}
                />
                <input 
                type = 'submit'
                value = 'Submit'
                className = 'btn'
                style = {{ flex : '1'}}
                />
            </form>
        )
    }
}
