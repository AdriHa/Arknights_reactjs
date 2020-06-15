import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";

import { Image } from 'react-native'


import fondo from './images/fondo3.jpg';  // Tell Webpack this JS file uses this image


function Fondo() {   // Import result is the URL of your image
    return <img src={logo} alt="Logo" />;
}

export default Fondo
