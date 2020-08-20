import React from 'react'
import {connect} from 'react-redux' 
import { DEL } from './reducers/crud';

const Todos = ({}) => {
  const todoList = this.props.todos.length ? (
    this.props.todos.map((todo) => (
      <div className="collection-item" key={todo.id}>
        <input type="text" value={todo.content} onChange={(e) => { this.props.editTodo(todo.id, e.target.value); }} />
        {(this.props.flag && todo.id === this.props.flag2) ? <span style={{ color: 'red' }} onClick={() => { this.props.onTodoChange(todo.id); }}>( Edit )</span> : <span style={{ color: 'black' }} onClick={() => { this.props.onTodoChange(todo.id); }}>( Edit )</span>}
        <span onClick={() => { this.props.deleteTodo(todo.id); }}> ( Delete )</span>
      </div>
          ))
  ) : (
    <p className="center">You have no todo's left, yay!</p>
  );

  return (
    <div className="todos collection">
      {todoList}
    </div>
  );
};

const mapStateToProps = (state) => ({
  flag: state.flipflag1,
  flag2: state.flipflag2,
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  deleteTodo: (id) => {
      dispatch({type: DEL, payload: id});
},
  onTodoChange: (id) => {
      dispatch({type: EDIT1, payload: id});
},
  editTodo: (id, event) => {
  dispatch({type: UPDATE, payload: id, payload1: event});
},
});


export default connect(mapStateToProps, mapDispatchToProps)(Todos);
