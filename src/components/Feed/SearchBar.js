import React, {useState, useContext} from 'react';
import {UserContext} from '../../context/usersContext'
import {makeStyles, fade} from '@material-ui/core/styles'
import {InputBase, Button, Grid} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';



const useStyles = makeStyles(theme =>({

    search:{
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(7),
            width: 'auto'
        },
        [theme.breakpoints.up('md')]:{
            marginLeft: theme.spacing(15),
            width: 'auto'
        },
        [theme.breakpoints.up('xs')]:{
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
        [theme.breakpoints.up('sm')]:{
            width: '12ch',
            '&:focus':{
                width: '20ch'
            }
        }
    }
}))
const SearchBar = ({t}) => {
    const [search, setSearch] = useState("")
    const {dispatch} = useContext(UserContext)
    const handleSearchBar = e =>
        setSearch(e.target.value)

    const submitSearch = () =>
        dispatch({
            type: 'SET_FILTER_TAGS',
            payload:  search
        })
    const classes = useStyles()
    return (
        <Grid container>
        <Grid item xs={8} className={classes.search}>
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
            
        </Grid>
        <Grid item>
            <Button 
                variant="outlined"
                size="small"
                onClick={submitSearch}>{t('search')}</Button>
        </Grid>
         </Grid>
    );
}

export default SearchBar;
