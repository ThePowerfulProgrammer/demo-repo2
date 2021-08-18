import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Count from './Count';
import Navbar from './componets/Navbar'
import Banner from './componets/Banner';
import Jumbotron from './componets/Jumbotron';
import Timer from './componets/Timer';
import ToDo from './componets/ToDo';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Jumbotron/>
    <Count/>
    <Banner />
    <App/>
    <ToDo/>
    <br/>
    <Timer />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
