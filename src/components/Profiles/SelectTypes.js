import React, {useState} from 'react';
import {FormControl, Typography, Select, MenuItem} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const initialProducts = [
    { type:"food"}, 
    { type:"rawMaterial"}, 
    { type:"supplements"}, 
    { type: "home"},
    { type: "books"},
    { type: "clothes"},
    { type: "exercise" },
    { type: "toys" },
    { type: "electronics" },
    { type: "videogames"}
]
const serviceSkills = [
    { type:"academics", area: "class"},
    { type: "accompaniment", area: "procedures"},
    { type: "babySitter", area: "procedures"},
    { type:"bankProcedure", area: "procedures"}, 
    { type:"coaching", area: "health"}, 
    { type:"consulting", area: "health"}, 
    { type:"cooking", area: "class"}, 
    { type: "design", area: "creative"},
    { type: "drawing", area: "creative"},
    { type:"exercise", area: "health"}, 
    { type:"facilities", area: "technic"}, 
    { type:"finances", area: "digital"},
    { type:"forex", area: "digital"},
    { type:"graphicDesign", area: "digital"},
    { type: "handcraft", area: "creative"},
    { type:"languages", area: "class"},
    { type: "laundry", area: "procedures"},
    { type:"marketing", area: "digital"}, 
    { type:"music", area: "class"},
    { type:"musicComposition", area: "creative"}, 
    { type: "petWalker", area: "procedures"},
    { type: "psicology", area: "health"},
    { type:"portrait", area: "creative"}, 
    { type:"programmer", area: "digital"},
    { type:"repair", area: "technicians"}, 
    { type:"shopping", area: "procedures"}, 
    { type:"techniques", area: "class"},
    { type:"transportation", area: "procedures"}, 
    { type:"uxui", area: "digital"},
    { type:"writing", area: "creative"}, 

]

const useStyles = makeStyles(theme => ({
    selects:{
        padding: theme.spacing(2,2),
        display: 'flex', 
        flexDirection: 'column', 
        alignContent: 'center', 
        justifyContent: 'center'
    },
    formControl:{
        margin: theme.spacing(1,1),
        minWidth: 200
    },
}))
const SelectTypes = ({t, setEdit, edit}) =>{
    const [products] = useState(initialProducts)
    const [services] = useState(serviceSkills)
    const handleChange= e =>{
        setEdit({...edit, subType: e.target.value, skill: ""})
    }

    const handleChangeService = e =>
        setEdit({...edit, subType:e.target.value.type, skill: e.target.value.area})

    const handleChangeCity = e =>
        setEdit({...edit, city: e.target.value})

    const handleSelectChange = e =>{
        e.target.value === "products"
        ? setEdit({...edit, type: "products"})
        : setEdit({...edit, type: "services"})
    }

    const classes = useStyles()

        return(
            <div className={classes.selects}>
            <FormControl variant="outlined" className={classes.formControl} >
                <Typography color="textSecondary">{t("chooseCity")}:</Typography>
                <Select onChange={handleChangeCity} value={edit.city}>
                    <MenuItem value="pdc">
                        <Typography color="textSecondary">Playa del Carmen</Typography>
                    </MenuItem>
                    <MenuItem value="cancun">
                        <Typography color="textSecondary">Cancun</Typography>
                    </MenuItem>
                    <MenuItem value="tulum">
                        <Typography color="textSecondary">Tulum</Typography>
                    </MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl} >
                <Typography color="textSecondary">{t("chooseProfile")}:</Typography>
                <Select onChange={handleSelectChange} value={edit.type}>
                    <MenuItem value="products">
                        <Typography color="textSecondary">{t("products")}</Typography>
                    </MenuItem>
                    <MenuItem value="services">
                        <Typography color="textSecondary">{t("services")}</Typography>
                    </MenuItem>
                </Select>
            </FormControl>
                {edit.type 
                ? edit.type === "products"
                    ?   <FormControl variant="outlined" className={classes.formControl}>
                            <Typography color="textSecondary">{t("productsArea")}:</Typography>
                            <Select variant="outlined" onChange={handleChange} value={edit.subType.type}>
                                        {products.map((product, index) =>
                                            <MenuItem key={`${product}${index}`} name={product.type} value={product.type}>
                                                <Typography color="textSecondary">{t(product.type)}</Typography>
                                            </MenuItem>
                                        )}
                                    </Select>
                            </FormControl>
                    :   <FormControl variant="outlined" className={classes.formControl}>
                            <Typography color="textSecondary">{t("servicesArea")}:</Typography>
                            <Select variant="outlined" onChange={handleChangeService} value={edit.subType.type}>
                                        {services.map((service, index) =>
                                            <MenuItem key={`${service}${index}`} name={service.type} value={service}>
                                                <Typography color="textSecondary" >{t(service.type)}</Typography>
                                            </MenuItem>
                                          
                                        )}
                                    </Select>
                        </FormControl>
                :null}
            </div>
        )
    }

export default SelectTypes;
