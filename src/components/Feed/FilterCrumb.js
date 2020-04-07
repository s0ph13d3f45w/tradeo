import React, {useState} from 'react'
import {Breadcrumbs, IconButton, InputBase, Button, Typography} from '@material-ui/core'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

import {makeStyles, fade} from '@material-ui/core/styles'

const useStyles = makeStyles(theme =>({
    crumbs:{
        display: 'flex',
        justifyContent: 'center',
    },
    iconButton:{
        [theme.breakpoints.up('xs')]:{
            size: 'small'
        }
    },
    search:{
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(0,5),
            width: 'auto'
        },
        [theme.breakpoints.up('md')]:{
            marginLeft: theme.spacing(2),
            width: 'auto'
        },
        [theme.breakpoints.up('xs')]:{
            marginLeft: theme.spacing(4),
            width: 'auto'
        }
    },
    searchIcon:{
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot:{
        color: 'inherit'
    },
    inputInput:{
        padding: theme.spacing(1,1,1,0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]:{
            width: '12ch',
            '&:focus':{
                width: '20ch'
            }
        }
    }
}))
const Filter = ({dispatch, t}) =>{
    const [search, setSearch] = useState("")

    const handleSearchBar = e =>
        setSearch(e.target.value)

    const submitSearch = () =>
        dispatch({
            type: 'SET_FILTER_TAGS',
            payload:  search
        })

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
        <Breadcrumbs 
            aria-label="breadcrumbs" className={classes.crumbs}>
            <div >
                <IconButton
                    id="products"
                    onClick={handleProductToggle}>
                    <EmojiObjectsIcon id="products" value="products"/>
                    <Typography color="textSecondary">
                        {t('products')}
                    </Typography>
                </IconButton>
                <IconButton
                    id="services"
                    onClick={handleServiceToggle}>
                    <AccessibilityNewIcon />
                    <Typography color="textSecondary">
                        {t('services')}
                    </Typography>
                </IconButton>
                <IconButton
                    id="all"
                    onClick={setFilterAll}>
                    <AddIcon/>
                    <Typography color="textSecondary">
                        {t('all')}
                    </Typography>
                </IconButton>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase 
                        placeholder="...marketing"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search'}}
                        value={search}
                        onChange={handleSearchBar}
                    />
                    <Button 
                        variant="outlined"
                        onClick={submitSearch}>{t('search')}</Button>
                </div>
            </div>
        </Breadcrumbs>
    )
}

export default Filter