import React, {Component} from 'react';
import TodoForm from './todo-form.jsx';
import TodoList from './todo-list.jsx';

export default class TodoBox extends Component {
	render() {
		return <div>
		  <TodoForm />
		  <TodoList />
		</div>;
	}
}