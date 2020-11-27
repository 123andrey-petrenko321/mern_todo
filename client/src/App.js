import APIHelper from './APIHelper'
import './App.css';
import React, { Component } from 'react';
import Header from './components/header/Header';
import TodoList from './components/todoList/TodoList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: []
    }
    this.deleteHandler = this.deleteHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
    this.moveUp = this.moveUp.bind(this)
    this.moveDn = this.moveDn.bind(this)
  }
  componentDidMount(){
    const fetchTodoAndSetTodos = async () => {
      const todos = await APIHelper.getAllTodos();
      this.setState({tasks:todos})}
      fetchTodoAndSetTodos()
  }

  deleteHandler = async (id) => {
    await APIHelper.deleteTodo(id)
    const todos = await APIHelper.getAllTodos();
    this.setState({ tasks: todos })
  }

  submitHandler = async (item) => {
    const newTodo = await APIHelper.createTodo(item)
    this.setState({ tasks: [...this.state.tasks.concat([newTodo])]})
  }

  moveUp(index){
    const newState = [...this.state.tasks];
    let elem = newState.splice(index,1);
    newState.splice(index-1,0,elem[0])
    console.log(newState)
    this.setState({tasks:newState})
  }

  moveDn(index){
    const newState = [...this.state.tasks];
    let elem = newState.splice(index,1);
    newState.splice(index+1,0,elem[0])
    this.setState({tasks:newState})
  }


  render() {
    console.log(this.state.tasks)
    return (
      <div className="App">
        <Header />
        <TodoList 
                  tasks={this.state.tasks} 
                  delete={this.deleteHandler} 
                  onSubmit={this.submitHandler} 
                  addSub={this.addSubList} 
                  up={this.moveUp}
                  down={this.moveDn}
                  />
      </div>

    )
  }
}

export default App;
