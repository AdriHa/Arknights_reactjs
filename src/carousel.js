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



class carousel extends Component{

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
                <div className="ArknightsTitle">Arknights</div>
                <div className="ArknightsText">
                    <p>Arknights is a mobile game where you have to defend your base with your operators</p>
                    <p>It's a tower defense game</p>
                    <p>Download it now in the playstore</p>
                </div>
            </div>
        );
    }
}

export default carousel;