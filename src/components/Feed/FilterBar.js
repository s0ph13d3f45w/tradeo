import React, {useState, useContext} from 'react'
import {UserContext} from '../../context/usersContext'
import{Button, Drawer, Grid} from '@material-ui/core' 
import {makeStyles} from '@material-ui/core/styles'

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
        display: 'flext',
        justifyContent: 'end'
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
                <Grid container className={classes.filters}>
                    <Grid item>
                        <Button 
                            onClick={filterProducts}>{t('products')}</Button>
                    </Grid>
                    <Grid item>
                        <Button
                            onClick={filterServices}>{t('services')}</Button>
                    </Grid>
                </Grid>
            </Drawer>
        </div>
    );
}

export default FilterBar;
