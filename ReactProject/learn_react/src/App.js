import logo from './logo.svg';
import './App.css';
import './styles/ToDo.css';
import ToDo from './componets/ToDo';
import todosData from './componets/todos';



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

function App(){
  //Js goes here
  const todo = todosData.map(data => <ToDo key={data.id} text={data.text}/>)

  return (
    //template goes here
    /* a goes above todo-list
      <div className="App">
        <header className="App-header">
          <h1>Hello world</h1>
        </header>
      </div>
    */
   
    <div>
      
      <div className="todo-list">
        {todo}
      </div>

    </div>
  )
}


export default App;
