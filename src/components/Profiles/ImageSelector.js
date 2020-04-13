import React, {useState} from 'react';
import {FormControl, Select, MenuItem, InputLabel, Typography, Box, Button} from '@material-ui/core'

const ImageSelector = ({classes, handleInputChange}) => {
    const [state, setState] = useState("avatar")
    const handleSelectChange = e =>
        setState(e.target.value)
    return (
        <div>
            <FormControl style={{width: '12em', marginTop: 2}}>
                <InputLabel>Load Image</InputLabel>
                <Select onChange={handleSelectChange} value={state}>
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
                    <MenuItem value="image1">
                        <Typography variant="subtitle2" color="textSecondary">
                            Gallery image1
                        </Typography>
                    </MenuItem>
                    <MenuItem value="image2">
                        <Typography variant="subtitle2" color="textSecondary">
                        Gallery image2
                        </Typography>
                    </MenuItem>
                    <MenuItem value="image3">
                        <Typography variant="subtitle2" color="textSecondary">
                        Gallery image3
                        </Typography>
                    </MenuItem>
                </Select>
            </FormControl>
            {state === "avatar" && 
            <Box className={classes.input}>
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
                <Box className={classes.input}>
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
            {state === "image1" &&
                <Box className={classes.input}>
                    <Typography variant="subtitle2" color="textSecondary">Gallery image 1:</Typography>
                    <input
                        placeholder="image1"
                        name="image1"
                        multiple={false}
                        onChange={handleInputChange}
                        type="file"
                        />
            </Box>
            }
            {state === "image2" &&
                <Box className={classes.input}>
                    <Typography variant="subtitle2" color="textSecondary">Gallery Image 2:</Typography>
                    <input
                        placeholder="image2"
                        name="image2"
                        multiple={false}
                        onChange={handleInputChange}
                        type="file"
                        />
                </Box>
            }
            {state === "image3" &&
                <Box className={classes.input}>
                    <Typography variant="subtitle2" color="textSecondary">Gallery Image 3:</Typography>
                    <input
                        placeholder="image3"
                        name="image3"
                        multiple={false}
                        onChange={handleInputChange}
                        type="file"
                        />
                </Box>
            }
        </div>
    );
}

export default ImageSelector;
