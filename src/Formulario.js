import React, {Component} from 'react';
import './App.css';
import './Formulario.css';



class Formulario extends React.Component {

    render() {
        return (
            <div className="App">
                <br></br>
                <br></br>
                <form>
                    <div className="bg-img">
                        <div className="textForm">
                            <br></br>
                            <br></br>
                            <br></br>
                            <div className="textFormSend">
                            <p align="center">Send to us your artwork!</p>
                            </div>
                            <label for="nya">Name</label>
                            <br />
                            <input type="text" name="name" id="name" />
                            <br /><br />
                            <label for="email">Email:</label>
                            <br />
                            <input type="text" name="email" id="email" />
                            <br /><br />
                            <label for="edad">Link</label>
                            <br/>
                            <input type="text" name="link" id="link" />
                            <br /><br />
                            <input type="submit" value="Send" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Formulario