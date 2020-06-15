import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import carousel from "./carousel";
import Formulario from "./Formulario";
import Images from "./Images";


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Navbar />, document.getElementById('Navbar'));
ReactDOM.render(<carousel />, document.getElementById('carousel'));
ReactDOM.render(<Formulario />, document.getElementById('Formulario'));
ReactDOM.render(<Images />, document.getElementById('Images'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
