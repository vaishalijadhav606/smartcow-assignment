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

import { usePalette } from 'react-palette';

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

const Video = styled.div`
    position: fixed;
    right: 0;
    bottom: 0;
    height: 250px;
    width: 300px;

    @media (max-width: 768px) { 
        width: 100%;
    }
`;

const size = {
    mobile: '768px',
}

const device = {
    mobile: `(min-width: ${size.mobile})`,
};


function Test2() {
    const [currentImage, setImage] = React.useState(img1);

    const renderImage = (obj, index) => {
        return <div key={index}><img alt="" src={obj.name} style={{ height: '40vh', width: '100%', objectFit: 'cover' }} /></div>
    }
    const { data } = usePalette(currentImage);
    return (
        <div>
            <div className="position-relative">
                <Carousel autoPlay showThumbs={false} infiniteLoop onChange={(obj)=>{
                    setImage(images[obj].name)
                }}>
                    {images.map(renderImage)}
                </Carousel>
                <Text style={{ color: data.darkVibrant }}>SMARTCOW.AI</Text>
            </div>
            <Video>
                <iframe width={device.mobile ? '100%' : "300"} title="Smartcow" height="250" src="https://www.youtube.com/embed/gAdTWB_ZhSA" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </Video>
        </div>
    );
}

export default Test2;