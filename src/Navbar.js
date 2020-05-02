import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";


class Navbar extends Component{

    render() {

        return (
            <div className="App">
                <>
                    <ReactBootStrap.Navbar bg="dark" variant="dark">
                        <ReactBootStrap.Navbar.Brand href="#home"><img src={"./images/logo-nav.png"} width="50" height="15%"></img></ReactBootStrap.Navbar.Brand>
                        <ReactBootStrap.Nav className="mr-auto">
                            <ReactBootStrap.Nav.Link href="#home">Index</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link href="#features">Story</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link href="#pricing">Gallery</ReactBootStrap.Nav.Link>
                        </ReactBootStrap.Nav>

                    </ReactBootStrap.Navbar>

                </>
            </div>
        );
    }
}

export default Navbar;