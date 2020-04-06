import React from 'react'
import {Breadcrumbs, IconButton} from '@material-ui/core'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import AddIcon from '@material-ui/icons/Add';

import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    crumbs:{
        display: 'flex',
        justifyContent: 'center',
    }
})
const Filter = ({dispatch}) =>{

    const setFilter = filter =>
        dispatch({
          type: 'SET_FILTER',
          payload: filter
        })
  
    const setFilterAll = () =>
        dispatch({type: 'SET_FILTER_ALL'})

    const handleProductToggle = () =>
        setFilter('products')
    

    const handleServiceToggle = () =>
        setFilter('services')

    const classes = useStyles()
    return(
        <Breadcrumbs aria-label="breadcrumbs" className={classes.crumbs}>
            <IconButton
                id="products"
                onClick={handleProductToggle}>
                <EmojiObjectsIcon id="products" value="products"/>
                Products
            </IconButton>
            <IconButton
                id="services"
                onClick={handleServiceToggle}>
                <AccessibilityNewIcon />
                Services
            </IconButton>
            <IconButton
                id="all"
                onClick={setFilterAll}>
                <AddIcon/>
                All
            </IconButton>
        </Breadcrumbs>
    )
}

export default Filter