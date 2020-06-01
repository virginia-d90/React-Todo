import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const toDos = [
  {
    task: '',
    id: '',
    completed: false,
  }
]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDos: toDos,
    };
  }

  //add class method to update state
  addTodo = taskName => {
    const newTodo = {
      name: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      toDos: [...this.state.toDos, newTodo]
    })
  }

  toggleTask = taskId => {
    this.setState({
      toDos: this.state.toDos.map(task => {
        if(task.id === taskId){
          return{
            ...task,
            completed: !task.completed
          };
        }else {
          return task;
        }
      })
    })
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          addTodo={this.addTodo} 
        />
        <TodoList
          toDos={this.state.toDos}
          toggleTask={this.toggleTask}
        />
      </div>
    );
  }
}

export default App;
