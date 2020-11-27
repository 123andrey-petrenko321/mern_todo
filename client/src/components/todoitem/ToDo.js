
import React, { Component } from 'react';
import SubList from '../sublist/SubList';
import './ToDo.css'

export default class ToDo extends Component{
    constructor(props){
        super()
        this.state ={
            nested:false
        }
        this.addNested = this.addNested.bind(this)
        this.deleteSub = this.deleteSub.bind(this)
        
    }
    addNested(){
        this.setState({nested:true})
    }
    deleteSub(){
        this.setState({nested:false})
    }
    
    render(){
        
        return (
            <li className="listItem">
                <div className="listItemContent">
                    {this.props.content}
                    <div className="btnGroup">
                        
                        {this.props.index?<button className="btnUp" onClick={(()=>{this.props.up(this.props.index)},()=>{this.props.up(this.props.index)})}>^</button>:null}

                        {this.props.tasksLength.length-1 !== this.props.index?<button className="btnDown" onClick={(()=>{this.props.down(this.props.index)},()=>{this.props.down(this.props.index)} )}>^</button>:null}
                        
                        {this.state.nested?<button className="btn_addSublist"
                            onClick={(()=>{this.props.deleteSub()},this.deleteSub)}>rs</button>:null}
                        
                        <button className="btn_addSublist" 
                            onClick={this.addNested}>+</button>
    
                        <button className="btn_todo_delete" 
                            onClick={()=>{this.props.delete(this.props.id)}}>X</button>
                    </div>
                </div>
                   {this.state.nested?<SubList addSub={this.props.addSub} delete={this.props.delete}/>:null} 
            </li>
        );
    }
    
};

