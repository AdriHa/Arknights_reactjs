import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import './Images.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";


class Images extends Component{
    constructor(props){
        super(props)
        this.state={
            imageUrl: "",
            imageUrlArray: [
                "./images/galeria/galeria1(1280x720).jpg",
                "./images/galeria/galeria2(1280x720).jpg",
                "./images/galeria/galeria3(1280x720).jpg",
                "./images/galeria/galeria4(1280x720).jpg",
                "./images/galeria/galeria5(1280x720).jpg",
                "./images/galeria/galeria6(1280x720).jpg",
                "./images/galeria/galeria7(1280x720).jpg",
                "./images/galeria/galeria8(1280x720).jpg",
                "./images/galeria/galeria9(1280x720).jpg",
                "./images/galeria/galeria10(1280x720).jpg",
            ],
            showModal: false,
            popImageUrl: ""
        }
    }

    render() {

        let imageUrlArray=this.state.imageUrlArray;
        const images =  imageUrlArray.map((url, index)=>{
            return(

                <img
                    className="singleImage"
                    src={url}
                    key={index}
                />
            )
        })

        return (
            <div className="App">
                <br></br>
                <br></br>
                <div className="FanArt">Fan Art Gallery</div>
                <br></br>
                <>

                    {images}


                </>
            </div>
        );
    }
}

export default Images;