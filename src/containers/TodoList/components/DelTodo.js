//删除任务import React, { Component } from 'react';
import React, { Component } from 'react';

class DelTodo extends Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <div>
                <button className='delBtn ' onClick={this.props.delTodo.bind(this)}>删除Todo</button>
            </div>
        );
    }
}

export default DelTodo;
