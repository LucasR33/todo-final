import React from 'react';
import {connect } from 'react-redux';
import todosService from '../services/todos.service';

const ENTER_KEY = 'Enter';

@connect(({ todos: { list } }) => ({todos: list }))

export default class TodosApp extends React.PureComponent{

    state = {
        newTodoContent: "",
        todos: []
      }
    
      componentDidMount(){
        todosService.listTodos()
        .then(todos => this.setState({todos}))
        .catch(console.error.bind(console))
      }

      handleSubmit = () => {
        const { todos, newTodoContent } = this.state;
        todosService.createTodo(newTodoContent)
            .then(todo =>
                this.setState({
                    todos: [
                        ...todos, 
                        todo
                    ],
                    newTodoContent: ""
                })
            );
      }

    render() {
        const { todos, newTodoContent } = this.state;
        return (
            <div className="todos-root">
                <h1>
                    Todos
                </h1>
                <div className="todos-header">
                    <input 
                        type="checkbox" 
                    />
                    <input 
                        type="text"
                        placeholder="What needs to be done ?"
                        value={newTodoContent}
                        onChange={({target: {value}}) => this.setState({ newTodoContent: value})}
                        onKeyUp={({key}) => key === ENTER_KEY && this.handleSubmit()}
                    />
                </div>
                <ul className="todos-list">
                    {todos.map(todo => 
                    <li key={`todo_${todo._id}`} 
                        className="todo-item">
                        <input 
                            type="checkbox" 
                        />
                        <span className="todo-content">
                            {todo.todoTitle}
                        </span>
                    </li>
                    )}
                </ul>
            </div>
        );
    }

}