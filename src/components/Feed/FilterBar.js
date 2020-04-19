import React, {useState, useContext} from 'react'
import {UserContext} from '../../context/usersContext'
import{Button, Drawer, Grid, IconButton, Typography, Select, MenuItem, FormControl} from '@material-ui/core' 
import {makeStyles} from '@material-ui/core/styles'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import ExploreIcon from '@material-ui/icons/Explore';
import FilterListIcon from '@material-ui/icons/FilterList';
import RefreshIcon from '@material-ui/icons/Refresh';





const useStyles = makeStyles(theme =>({
    root:{
        margin: theme.spacing(2, 0, 1, 30),
        display: 'flex',
        justifyContent: 'end',
        [theme.breakpoints.up('sm')]:{
            justifyContent: 'center',
            marginLeft: 500
        },
    },
    filters:{
        margin: theme.spacing(2,0,1),
        display: 'flext',
        justifyContent: 'center'
    },
    location:{
        margin: theme.spacing(1,0,0)
    },
    locationIcon:{
        margin: theme.spacing(0.5,1,0)
    },
    filterButton:{
        margin: theme.spacing(0.5, 0, 3, 2)
    }
    
 
}))
const FilterBar = ({t}) => {
    const [show, setShow] = useState(false)
    const [location, setLocation] = useState("pdc")
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

    const locationHandler = (e) =>
        setLocation(e.target.value)
    
    const locationFilter = () =>
        dispatch({
            type: 'SET_LOCATION_FILTER',
            payload: location
        })
    
    const refresh = () =>  
        dispatch({type:'SET_FILTER_ALL'})

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Button variant="outlined" color="secondary" onClick={toggleShow}>{t('filter')} <FilterListIcon color="secondary"/></Button>
            <Drawer 
                anchor="top" open={show} onClose={toggleShow}>       
                <Grid container className={classes.filters}>
                    <Grid item>
                            <IconButton
                            color="secondary"
                            id="services"
                            onClick={refresh}>
                                <RefreshIcon />
                            </IconButton>
                    </Grid>
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
                    </Grid>
                    <Grid item className={classes.location}>
                        
                        <ExploreIcon className={classes.locationIcon} color="secondary" />
                        <FormControl color='secondary'>
                            <Select  onChange={locationHandler} value={location}>
                                <MenuItem value="pdc">
                                    <Typography variant="subtitle2" color='textSecondary'>
                                        Playa del Carmen
                                    </Typography>
                                </MenuItem>
                                <MenuItem value="tulum">
                                    <Typography variant="subtitle2" color='textSecondary'>
                                        Tulum
                                    </Typography>
                                </MenuItem>
                                <MenuItem value="cancun">
                                    <Typography variant="subtitle2" color='textSecondary'>
                                        Cancun
                                    </Typography>
                                </MenuItem>
                               
                            </Select>
                        </FormControl>
                        
                        <Button className={classes.filterButton} color="secondary" size="small"
                            variant="contained" onClick={locationFilter} >{t("filterLocation")}</Button>
                     
                        {/* <IconButton
                        color="secondary"
                        id="location"
                        onClick={filterServices}>


                            <Typography color="secondary">
                                {t('services')}
                            </Typography>
                        </IconButton> */}
                    </Grid>
                   
              
                </Grid>
            </Drawer>
        </div>
    );
}

export default FilterBar;
