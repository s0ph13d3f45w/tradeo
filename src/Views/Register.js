import React, {useState} from 'react'
import {useSpring, animated} from 'react-spring'
import {useTranslation} from 'react-i18next'
import MainLayout from '../layouts/MainLayout'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import {
        Button,
        Card, 
        Container, 
        CardActionArea,
        Typography,
        FormControl,
        MenuItem,
        Select,
        TextField,
        FormGroup,
        useMediaQuery,
        InputLabel,
        Input} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root:{
        display: 'flex',
        marginTop: 63,
        backgroundColor: theme.palette.background.default,
        height: '100vh',
        [theme.breakpoints.up('xs')]:{
            marginTop: 55,
            flexDirection: 'column',
            alignItems: 'center'
        },
        [theme.breakpoints.up('sm')]:{
            marginTop: 64,
            flexDirection: 'row',
            alignItems: 'start',
            justifyContent: 'end'
        }
    },
    img:{
        height: '90vh',
        boxShadow: '5px 5px 5px grey',
        marginRight: 100,
    },
    form:{
        paddingLeft: 3,
        marginTop: 10,
        width: '100vh',
        [theme.breakpoints.down('sm')]:{
            margin: '0 auto',
            width: '80vh'
        }
    },

    textInput:{
        marginLeft: 5,
        display:'flex',
        flexDirection: 'column'
    },
    tag:{
        display: 'flex',
        width: '80vh',
        margin: '0 auto',
        [theme.breakpoints.up('sm')]:{
            width: '100vh'
        },

    },
    buttons:{
        display: 'flex',
        marginTop: 10,
        justifyContent: 'center'
    }
}))


const Register = () =>{
    const [imageUrl] = useState("https://images.unsplash.com/photo-1465161191540-aac346fcbaff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80")
    const fade = useSpring({from:{opacity: 0}, opacity: 1})
    const theme = useTheme()
    const showImage = useMediaQuery(theme.breakpoints.up('sm'))
    const {t} = useTranslation()

    const classes = useStyles()
    return(
        <MainLayout>
            <animated.div className={classes.root} style={fade}>
                {showImage && 
                    <div className={classes.img}>
                        <img src={imageUrl} alt ="cuadros" style={{opacity: 0.8}} />
                    </div>
                }   
                <div className={classes.form}>
                    <Typography variant="h5"
                        style={{marginLeft: 20}}>{t('signUp')}</Typography>
                    <Container maxWidth="sm">
                        <Card>
                            <CardActionArea>
                                <FormGroup>
                                    <div className={classes.textInput}>
                                        <FormControl>
                                            <InputLabel>{t('name')}</InputLabel>
                                            <Input />
                                        </FormControl>
                                        <FormControl>
                                            <InputLabel>{t('email')}</InputLabel>
                                            <Input />
                                        </FormControl>
                                        <FormControl>
                                            <InputLabel>{t('type')}</InputLabel>
                                            <Select>
                                                <MenuItem>
                                                    {t('products')}
                                                </MenuItem>
                                                <MenuItem>
                                                    {t('services')}
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                        <div className={classes.tag}>
                                            <FormControl>
                                                <InputLabel>Tag1</InputLabel>
                                                <Input />
                                            </FormControl>
                                            <FormControl>
                                                <InputLabel>Tag2</InputLabel>
                                                <Input />
                                            </FormControl>
                                            <FormControl>
                                                <InputLabel>Tag3</InputLabel>
                                                <Input />
                                            </FormControl>
                                        </div>
                                  
                                            <TextField
                                                id="standard-textarea"
                                                label={t('description')}
                                                multiline
                                                rows="4"
                                                />
                                   
                                    </div>
                                </FormGroup>
                            </CardActionArea>
                        </Card>
                        <div className={classes.buttons}>
                            <Button variant="outlined">{t('signUp')}</Button>
                            <Button variant="filled">{t('signIn')}</Button>
                        </div>
                    </Container>
                </div>
               
            </animated.div>
        </MainLayout>
    )
}

export default Register