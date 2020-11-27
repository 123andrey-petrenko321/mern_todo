import React, { Component } from 'react';
import './FormSubmit.css'


class FormSubmit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }
    onValueChange(e) {
        this.setState({ content: e.target.value })
    }
    formSubmit(e) {
        e.preventDefault();
        const { content } = this.state
        if (this.state.content === '') {
            return
        }
        const newTask = {content,key:Date.now().toString(),nested:false}
        this.props.onSubmit(newTask);
        this.setState({ content: '' });
    }

    render() {
        return (
            <form className="formSubmit" onSubmit={this.formSubmit}>
                <input className="input"
                    type="text"
                    value={this.state.content}
                    placeholder="Enter your task"
                    onChange={this.onValueChange}
                />
                <button className="btnSubmit">Add</button>
            </form>
        );
    }
}

export default FormSubmit;