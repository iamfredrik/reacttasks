import React, { Component } from 'react';
import {Form, Input} from  'muicss/react';

class AddTask extends Component {
  constructor(props){
    super(props);
    this.state = {
      task: ''
    }
  }

  onSubmit(e){
    this.props.onAddTask(this.state.task);
    e.preventDefault();
  }

  onChange(e){
    this.setState({task:e.target.value})
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit.bind(this)}>
        <Input hint="Add Task" onChange={this.onChange.bind(this)} />
      </Form>
    );
  }
}

export default AddTask;
