import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import {makeStyles} from '@material-ui/core/styles'
import "react-responsive-carousel/lib/styles/carousel.min.css";


const useStyles = makeStyles({
    root:{
        border: "2px solid #cccc", 
        width: "198px",
        alignSelf: "center",
        justifySelf: "center",
        borderRadius: 25
    }
})
const Gallery = ({images}) => {
    const classes = useStyles()

    return (
        images[0] ? <div className={classes.root}>
                    <Carousel showThumbs={false} showStatus={false} width="200px" >   
                        {images.map(image => 
                            <div key={image}>
                                <img src={image} alt="user" style={{height: 175, width: 200}} />
                            </div>
                        )}        
                    </Carousel>
                </div>
        : null
    );
}

export default Gallery;
