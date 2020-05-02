import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const photos = [
    {
        name: 'Photo 1',
        url: "./images/carousel/carrusel1(1900x1080).jpg"
    },
    {
        name: 'Photo 2',
        url: "./images/carousel/carrusel2(1900x1080).png"
    },
    {
        name: 'Photo 3',
        url: "./images/carousel/carrusel3(1900x1080).jpg"
    }
]



class App extends Component{

render() {
    const settings ={
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        className: "slides"
    }
    return (
        <div className="App">

            <div className="carousel">
            <Slider {...settings}>
                {photos.map((photo) =>{
                    return(
                        <div>
                            <img width="100%" src={photo.url}/>
                        </div>
                    )
                })}
            </Slider>
            </div>

        </div>
    );
}
}

export default App;
