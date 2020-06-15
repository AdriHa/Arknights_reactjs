import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import './Navbar.css';




// Be sure to include styles at some point, probably during your bootstraping




class Navbar extends Component{

    render() {

        return (
            <div className="App">
                <div class="NavbarSticky">
                    <>
                        <ReactBootStrap.Navbar bg="dark" variant="dark">
                            <ReactBootStrap.Navbar.Brand href="#home"><img src={"./images/logo-nav.png"} width="50" height="15%"></img></ReactBootStrap.Navbar.Brand>
                            <ReactBootStrap.Nav className="mr-auto">
                                <ReactBootStrap.Nav.Link href="#home">Index</ReactBootStrap.Nav.Link>
                                <ReactBootStrap.Nav.Link href="#gallery">Gallery</ReactBootStrap.Nav.Link>
                                <ReactBootStrap.Nav.Link href="#Fform">Form</ReactBootStrap.Nav.Link>
                            </ReactBootStrap.Nav>

                        </ReactBootStrap.Navbar>

                    </>
                </div>
            </div>
        );
    }
}

export default Navbar;