import React from 'react';
import FormSubmit from '../form/FormSubmit';
import ToDo from '../todoitem/ToDo';
import './TodoList.css'

const TodoList = (props) => {
   
    const todos = props.tasks.map((item,index) => {
       
        return <ToDo content={item.content} key={item.key} id={item._id} index={index} delete={props.delete} addSub={props.addSub} up={props.up} down={props.down} tasksLength={props.tasks}/>
    })
    
    return (
        <ul className="todoList">   
            <FormSubmit onSubmit={props.onSubmit} />
            {todos}
        </ul>
    );
};

export default TodoList;