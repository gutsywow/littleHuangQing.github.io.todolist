import React, { Component } from 'react';
import '../css/AddTodo.css'
class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state={
            content:""
        }
    }
    changeValue(e){
        this.setState({
            content:e.target.value
        })
    }
    render() {
        return (
            <div className='addCont'>
                <input className='input' type="text" value={this.state.content} onChange={this.changeValue.bind(this)} placeholder='添加todo'/>
                <button className='addbtn' onClick={this.props.addTodo.bind(this,this.state.content)}>添加todo</button>
            </div>
        );
    }
}

export default AddTodo;
