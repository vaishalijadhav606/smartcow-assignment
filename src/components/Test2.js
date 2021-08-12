import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styled from 'styled-components';
import img1 from "../icons/img1.jpg";
import img2 from "../icons/img2.jpg";
import img3 from "../icons/img3.jpg";
import img4 from "../icons/img4.jpg";
import img5 from "../icons/img5.jpg";
import img6 from "../icons/img6.jpg";

const images = [
    {
        name: img1
    },
    {
        name: img2
    },
    {
        name: img3
    },
    {
        name: img4
    },
    {
        name: img5
    },
    {
        name: img6
    },
]

const Text = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    font-weight: 800;
`;

const Video =  styled.div`
    position: fixed;
    right: 0;
    bottom: 0;
    height: 250px;
`;

function Test2() {
    const renderImage = (obj, index) => {
        return <div key={index}><img src={obj.name} style={{height: '40vh', width: '100%', objectFit: 'cover'}}/></div>
    }
    return (
        <div>
        <div className="position-relative">
            <Carousel autoPlay showThumbs={false} infiniteLoop>
                {images.map(renderImage)}
            </Carousel>
            <Text>SMARTCOW.AI</Text>
        </div>
        <Video>
            <iframe width="300" height="250" src="https://www.youtube.com/embed/gAdTWB_ZhSA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Video>
        </div>
    );
}

export default Test2;