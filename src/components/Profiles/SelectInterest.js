import React, {useState} from 'react'
import {FormControl,Typography, Select, MenuItem} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme =>({
    root:{
        color: 'rgba(0, 0, 0, 0.54)',
        margin: theme.spacing(3.5,0,1),
        minWidth: 200
    }
}))

const interests = [
    { type: 'products', area:'food', id: 'p1'},
    { type: 'products', area:"prime", id:'p3'}, 
    { type: 'products', area:"supplements", id:'p4'}, 
    { type: 'products', area: "home", id:'p5'},
    { type: 'products', area: "books", id:'p6'},
    { type: 'products', area: "clothing", id:'p7'},
    { type: 'products', area: "sport" , id:'p8'},
    { type: 'products', area: "toys" , id:'p9'},
    { type: 'products', area: "electronics" , id:'p10'},
    { type: 'products', area: "videogames", id:'p11'},
    { type: 'services', area: 'health', id: 's1', },
    { type: 'services', area: 'creative', id: 's2', },
    { type: 'services', area: 'digital', id: 's3', },
    { type: 'services', area: 'class', id: 's4', },
    { type: 'services', area: 'technic', id: 's5', },
    { type: 'services', area: 'procedures', id: 's6',},
]

const SelectInterest = ({t, handlerInterestChange}) =>{
    const classes = useStyles()
    const [interestOptions] = useState(interests)
    const [selectedInterest, setSelectedInterest] = useState(interestOptions[0])
    const selectedInputChange = (e) => {
        setSelectedInterest(e.target.value)
        handlerInterestChange(e.target.value)
    }
    return(
        <FormControl variant="outlined" className={classes.root} >
            <Typography color="textSecondary">Choose interest:</Typography>
            <Select onChange={selectedInputChange} value={selectedInterest}>
                {interestOptions.map(interest =>
                    <MenuItem key={interest.id} name={interest.area} value={interest}>
                        <Typography color="textSecondary">{t(interest.area)}   /   {t(interest.type)}</Typography>
                    </MenuItem>
                )}
            </Select>
        </FormControl>
    )
}

export default SelectInterest