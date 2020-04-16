import React, {useContext, createRef} from 'react'
import {UserSessionContext} from '../context/userSessionContext'
import {OwnProfileContext} from '../context/ownProfileContext'
import {makeStyles} from '@material-ui/core/styles'
import {Drawer} from '@material-ui/core'
import AppBar from '../components/AppBar'
import UserOwnProfile from '../components/Profiles/UserOwnProfile'
import BottomBar from '../components/Feed/BottomBar'
import { useTranslation } from 'react-i18next'
import {useHistory} from 'react-router-dom'


const useStyles = makeStyles(theme =>({
    main:{
        backgroundColor: theme.palette.background.default
    }
}))

const Layout = ({children}) =>{
    const { ownProfile,toggleOwnProfile} = useContext(OwnProfileContext)
    const {t} = useTranslation()
    let history = useHistory()
    const {user} = useContext(UserSessionContext)
    const userOwnProfileRef = createRef()
    const classes = useStyles()
    return(
        <div className={classes.main}>
            <AppBar/>
            {children}
            <Drawer anchor="left" open={ownProfile} onClose={toggleOwnProfile}>
             { user ?<UserOwnProfile user={user} ref={userOwnProfileRef} t={t} history={history} />
             : null}
          </Drawer>
            {user && <BottomBar toggleShow={toggleOwnProfile} photoURL={user.photoURL} />}
        </div>
    )
}

export default Layout