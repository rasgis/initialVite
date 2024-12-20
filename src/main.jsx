import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './Components/TodoList';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<div className="container">
			<TodoList />
		</div>
	</React.StrictMode>,
);
