import React, {useState, useContext} from 'react'
import {UserContext} from '../../context/usersContext'
import{Button, Drawer, Grid, IconButton, Typography} from '@material-ui/core' 
import {makeStyles} from '@material-ui/core/styles'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';

const useStyles = makeStyles(theme =>({
    root:{
        display: 'flex',
        justifyContent: 'end',
        marginRight: 20,
        marginTop: 5,
        [theme.breakpoints.up('sm')]:{
            justifyContent: 'center',
            marginLeft: 500
        },
    },
    filters:{
        height: 30,
        display: 'flext',
        justifyContent: 'center'
    }
    
 
}))
const FilterBar = ({t}) => {
    const [show, setShow] = useState(false)
    const {dispatch} = useContext(UserContext)
    const toggleShow = () => setShow(!show)

    const filterProducts = () =>
        dispatch({
            type: 'SET_FILTER',
            payload: 'products'
        })
    
    const filterServices = () =>
        dispatch({
            type: 'SET_FILTER',
            payload: 'services'
        })

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Button onClick={toggleShow}>{t('filter')}</Button>
            <Drawer 
                anchor="top" open={show} onClose={toggleShow}>
                    <div style={{height: 50}}>

                    
                <Grid container className={classes.filters}>
                    <Grid item>
                        <IconButton
                        id="products"
                        onClick={filterProducts}>
                            <EmojiObjectsIcon 
                                color="secondary"
                                id="products" value="products"/>
                            <Typography color="secondary">
                                {t('products')}
                            </Typography>
                        </IconButton>
                        {/* <Button 
                            onClick={filterProducts}>{t('products')}</Button> */}
                    </Grid>
                    <Grid item>
                        <IconButton
                        color="secondary"
                        id="services"
                        onClick={filterServices}>
                            <AccessibilityNewIcon />
                            <Typography color="secondary">
                                {t('services')}
                            </Typography>
                        </IconButton>
                        {/* <Button
                            onClick={filterServices}>{t('services')}</Button> */}
                    </Grid>
                   
              
                </Grid>
                </div>
            </Drawer>
        </div>
    );
}

export default FilterBar;
