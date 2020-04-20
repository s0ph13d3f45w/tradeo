import React from 'react'
import Title from '../Login/Title'
import {makeStyles} from '@material-ui/core/styles'
import StarRatings from 'react-star-ratings';


const useStyles = makeStyles({
    rater:{
        display: 'flex',
        flexFlow: 'row wrap',
        marginTop: 5,
        padding: 10,
  
    },
})

const Rating = ({counter, points}) =>{
    let result = points / counter
    if (Object.is(result, NaN)) {result = 0}

    const classes = useStyles()
    return(
        <div className={classes.rater}>
                <Title 
                    color="textSecondary">
                        <strong>
                        {result}
                        </strong>
                </Title>
                <StarRatings 
                    rating={result}
                    starDimension="18px"
                    starSpacing="2px"
                    starRatedColor="yellow"
                    numberOfStars={5}
                /> 
        </div>
    )
}
export default Rating