import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import DelTodo from './components/DelTodo';
import VisibleTodoList from './components/VisibleTodoList';
import Filter from './components/Filter'
import {connect} from "react-redux";
import './css/TodoList.css'
let i=0;
class TodoList extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className='todolist'>
                <AddTodo addTodo={this.props.addTodo} />
                <VisibleTodoList todos={this.props.todos} toggleTodo={this.props.toggleTodo}/>
                <Filter setFilter={this.props.setFilter} total={this.props.todos.length}/>
                <DelTodo  delTodo={this.props.delTodo}/>
            
            </div>
        );
    }
}

//取一部分state给当前的顶层容器用
const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};
//根据todos和visibilityFilter的值来计算状态，映射给当前container的props
const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.complete);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.complete);
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

//将事件绑定到顶层容器props，调用props.事件时可以直接派发action到store，进行状态修改
const mapDispatchToProps = (
    dispatch
) => {
    return {
        setFilter: (filter) => {
            dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter: filter
            });
        },
        addTodo: (content) => {
            dispatch({
                type: 'ADD_TODO',
                content: content,
                id:i++
            });
        },
        delTodo: (id) => {
            dispatch({
                type: 'DEL_TODO',
                id:id
            });
        },
        toggleTodo: (id)=>{
            dispatch({
                type: 'TOGGLE_TODO',
                id: id
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
