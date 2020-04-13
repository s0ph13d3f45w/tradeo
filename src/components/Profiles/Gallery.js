import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const Gallery = ({user}) => {
    const {image1, image2, image3} = user;
    const images = [image1, image2, image3]

    return (
        <div style={{border: "2px solid #cccc"}}>
        <Carousel showThumbs={false} showStatus={false} width="200px" style={{border: '2px solid black'}}>   
            {images.map(image => 
                <div key={image}>
                    <img src={image} alt="user" style={{height: 175, width: 200}} />
                </div>
            )}        
        </Carousel>
        </div>
    );
}

export default Gallery;
