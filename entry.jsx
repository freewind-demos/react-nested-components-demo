import React from 'react';
import ReactDOM from 'react-dom';
import TodoBox from './todo-box.jsx';

ReactDOM.render(
  <TodoBox />,
  document.getElementById("content")
);

// Notice!!!
// Following is required to make reloading happen
if (module.hot) {
  module.hot.accept();
}
