import logo from './logo.svg';
import './App.css';
import './styles/ToDo.css';
import ToDo from './componets/ToDo';
import Bio from './componets/Bio';
import todosData from './componets/todos';
import biodata from './componets/myBioData';
import React from 'react';



// Base app
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/



class App extends React.Component {
  /*
    The state object is where you store property values that belongs to the component.

    When the state object changes, the component re-renders
  */ 
  constructor() {
    super()
    this.state = {
      todos: todosData,
      
    } 
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(Prevstate => {
       const updateTodos = Prevstate.todos.map(todo => {
         if (todo.id === id ) {
           todo.completed = !todo.completed
         }
         return todo
       })
       return {
         todos: updateTodos
       }
    })
  }
   


  render () {
    const todo = this.state.todos.map(data => <ToDo key={data.id} text={data.text} handleChange={this.handleChange}/>)
    const bio = biodata.map(data => <Bio  key={data.id} name={data.name} surname={data.surname} age={data.age}/>)
    return (
          <div>            
            <div className="todo-list mb-5">
              {todo}
              
            </div>
            {bio}
          
            

          </div>
      )

    }
}

 
export default App;
