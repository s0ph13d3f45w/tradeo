import React, {useState, forwardRef} from 'react';
import {FormControl, Select, MenuItem, Typography, Box, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    formControl:{
        margin: theme.spacing(3),
        minWidth: 200
    },
    galleryImages:{
        display: 'flex',
        flexDirection: 'column',
    },
    galleryInput:{
        margin: theme.spacing(1,1)
    }
}))

const ImageSelector = forwardRef(({handleInputChange}) => {
    const classes = useStyles()
    const [state, setState] = useState("avatar")
    const handleSelectChange = e =>
        setState(e.target.value)
    return (
        <>
            <FormControl className={classes.formControl}>
                <Select variant="outlined" onChange={handleSelectChange} value={state}>
                    <MenuItem value="avatar">
                        <Typography variant="subtitle2" color="textSecondary">
                            Avatar
                        </Typography>
                    </MenuItem>
                    <MenuItem value="wallpaper">
                        <Typography variant="subtitle2" color="textSecondary">
                        Wallpaper
                        </Typography>
                    </MenuItem>
                    <MenuItem value="gallery">
                        <Typography variant="subtitle2" color="textSecondary">
                            Gallery
                        </Typography>
                    </MenuItem>
                </Select>
            </FormControl>
            {state === "avatar" && 
            <Box >
                    <Typography variant="subtitle2" color="textSecondary">Avatar Image:</Typography>
                    <input
                        placeholder="avatar"
                        name="photoURL"
                        multiple={false}
                        onChange={handleInputChange}
                        type="file"
                        />

            </Box>
            }
            {state === "wallpaper" &&
                <Box >
                    <Typography variant="subtitle2" color="textSecondary">Wallpaper Image:</Typography>
                    <Button>
                    <input
                        placeholder="wallpaper"
                        name="wallpaper"
                        multiple={false}
                        onChange={handleInputChange}
                        type="file"
                        />
                    </Button>
            </Box>
            }
            {state === "gallery" &&
                <div className={classes.galleryImages}>

                        <Typography variant="subtitle2" color="textSecondary">Gallery image 1:</Typography>
                        <input
                            className={classes.galleryInput}
                            placeholder="image1"
                            name="image1"
                            multiple={false}
                            onChange={handleInputChange}
                            type="file"
                            />


                        <Typography variant="subtitle2" color="textSecondary">Gallery Image 2:</Typography>
                        <input
                            className={classes.galleryInput}
                            placeholder="image2"
                            name="image2"
                            multiple={false}
                            onChange={handleInputChange}
                            type="file"
                            />


                        <Typography variant="subtitle2" color="textSecondary">Gallery Image 3:</Typography>
                        <input
                            className={classes.galleryInput}
                            placeholder="image3"
                            name="image3"
                            multiple={false}
                            onChange={handleInputChange}
                            type="file"
                            />

                </div>
            }
          
        </>
    );
})

export default ImageSelector;
