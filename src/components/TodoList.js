import React from 'react'
import TodoItems from './TodoItems'
import TodoService from '../services/todo.service'

class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tasks: [],
      newTask:''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.editItems = this.editItems.bind(this);
  }
  handleInput(e){
    this.setState({
      newTask: e.target.value
    })
  }

  handleClick(e){
   if(this.state.newTask.trim()){

    const todoItem = {
      title: this.state.newTask
    }

   TodoService.create(todoItem).then((res)=>{
      const newTasks = [...this.state.tasks, res.data]
      this.setState({
        tasks: newTasks,
        newTask:''
      })
    });
    //Concatenate new task object to the previous tasks in the state
    // this.setState(prevState=>{
    //   return {
    //     tasks: prevState.tasks.concat(newItem)
    //   }
    // })
    //Another concatenating method you might find easier
    // const newTask = [...this.state.tasks, newItem]
    // this.setState({
    //   tasks: newTask
    // })
    //Empty the newTask property in the state
    ;
   }else{
     alert('Please enter a value')
   }
  }
   removeItem(id ){
    TodoService.remove(id).then((res) => {
      const filteredTasks = this.state.tasks.filter((task) =>task.id !==res.data.id && task.id !== id )
      this.setState({
        tasks: filteredTasks
      })
     
      
    });
  }
      
  editItems (id, value) {
          const todoItem = {
            title: value
          }
      TodoService.update(id, todoItem).then(() => {
        const tasks = this.state.tasks
        tasks.map(task => {
          if( task.id === id){
            task.title = value
          }
        })
        this.setState({tasks: tasks})
      })
    }


    // const filteredTasks = this.state.tasks.filter(task => {
    //   return task.id !== id;
    // })
    // this.setState({
    //   tasks: filteredTasks
    // })
  
  
  componentDidMount(){
    TodoService.getAll().then((res) => this.setState({
      tasks: res.data
    }))

   }

  // componentDidUpdate(){
  
  // }
  // componentWillUnmount(){

  // }
  render(){

   
  
    return( 
    <div>
     <form>
       <input type='text' onInput={this.handleInput} value={this.state.newTask}/>
       <button type='button' onClick={this.handleClick}>Add</button>
     </form>
     <ul>
        <TodoItems tasks={this.state.tasks} foo='bar'  editItems={this. editItems} removeItem={this.removeItem}/>
     </ul>
     
    </div>
    )
  }
}
export default TodoList;
