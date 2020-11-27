import React, { Component } from 'react';
import SublistForm from '../sublistForm/SublistForm'
import ToDo from '../todoitem/ToDo';
import APIHelper from '../../APIHelper'

class SubList extends Component {
    constructor(props) {
        super(props)
        this.state = {
          subListTasks: []
        }
        this.submitHandler = this.submitHandler.bind(this)
        this.deleteHandler = this.deleteHandler.bind(this)
        this.deleteSublist = this.deleteSublist.bind(this)
        this.moveUp = this.moveUp.bind(this)
        this.moveDn = this.moveDn.bind(this)
        
    }
    componentDidMount(){
      const fetchTodoAndSetTodos = async () => {
        const todos = await APIHelper.getAllSubTodos();
        this.setState({subListTasks:todos})}
        fetchTodoAndSetTodos()
    }
    submitHandler = async(item) => {
        const newTodo = await APIHelper.createTodo(item)
        this.setState({ subListTasks: [...this.state.subListTasks.concat([newTodo])] })
      }
    deleteHandler = (index) => {
        const newState = [...this.state.subListTasks];
        newState.splice(index, 1);
        this.setState({ subListTasks: newState })
      }
    deleteSublist = () =>{
        const newState = [...this.state.subListTasks];
        newState.splice(0);
        this.setState({ subListTasks: newState })
    }
    moveUp(index){
        const newState = [...this.state.subListTasks];
        let elem = newState.splice(index,1);
        newState.splice(index-1,0,elem[0])
        this.setState({subListTasks:newState})
      }
    
      moveDn(index){
        const newState = [...this.state.subListTasks];
        let elem = newState.splice(index,1);
        newState.splice(index+1,0,elem[0])
        this.setState({subListTasks:newState})
      }
    
    render() {
        
        const subItems = this.state.subListTasks.map((item,index)=>{
           return <ToDo content={item.content} 
                        key={item.key} 
                        id={index} 
                        delete={this.deleteHandler} 
                        addSub={this.props.addSub} 
                        deleteSub={this.deleteSublist}
                        tasksLength={this.state.subListTasks}
                        up={this.moveUp}
                        down={this.moveDn}
                       />
        })
        return (
            <ul>
                <SublistForm addSub={this.props.addSub} onSub={this.submitHandler}/>
                {subItems}
            </ul>
        );
    }
}

export default SubList;