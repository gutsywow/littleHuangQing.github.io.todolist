import React,{ Component } from 'react';

class Filter extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log("=条目",this.props.total)
        return(
            <div>
                <button className='all btn' onClick={this.props.setFilter.bind(this,"SHOW_ALL")}>任务列表</button>
                <button className='did btn' onClick={this.props.setFilter.bind(this,"SHOW_COMPLETED")}>已完成</button>
                <button className='doing btn' onClick={this.props.setFilter.bind(this,"SHOW_ACTIVE")}>正在进行</button>
                <p className='pStyle'>
                    共
                    <span className='spanStyle'>{this.props.total}</span>
                    条
                </p>
            
            </div>
        )
    }
}

export default Filter;