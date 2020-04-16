import React, {useState} from 'react';
import {FormControl, Typography, Select, MenuItem, ListItem} from '@material-ui/core'

const initialProducts = [
    { type:"food"}, 
    { type:"prime"}, 
    { type:"supplements"}, 
    { type: "home"},
    { type: "books"},
    { type: "clothing"},
    { type: "sport" },
    { type: "toys" },
    { type: "electronics" },
    { type: "videogames"}
]
const serviceSkills = [
    { type:"consulting", area: "health"}, 
    { type:"coaching", area: "health"}, 
    { type:"exercise", area: "health"}, 
    { type: "psicology", area: "health"},
    { type:"portrait", area: "creative"}, 
    { type:"musicComposition", area: "creative"}, 
    { type:"writing", area: "creative"}, 
    { type: "drawing", area: "creative"},
    { type: "handcraft", area: "creative"},
    { type: "design", area: "creative"},
    { type:"transportation", area: "procedures"}, 
    { type:"bankProcedure", area: "procedures"}, 
    { type:"shopping", area: "procedures"}, 
    { type: "laundry", area: "procedures"},
    { type: "babySitting", area: "procedures"},
    { type: "dogWalker", area: "procedures"},
    { type: "accompaniment", area: "procedures"},
    { type:"installing", area: "technicians"}, 
    { type:"repair", area: "technicians"}, 
    { type:"marketing", area: "digital"}, 
    { type:"programmer", area: "digital"},
    { type:"uxui", area: "digital"},
    { type:"graphicDesign", area: "digital"},
    { type:"forex", area: "digital"},
    { type:"finantialServices", area: "digital"},
    { type:"cooking", area: "class"}, 
    { type:"music", area: "class"},
    { type:"languages", area: "class"},
    { type:"academics", area: "class"},
    { type:"techniques", area: "class"},
]

const SelectTypes = ({t, setEdit, edit, classes}) =>{
    const [products] = useState(initialProducts)
    const [services] = useState(serviceSkills)
    const handleChange= e =>{
        setEdit({...edit, subType: e.target.value, skill: ""})
    }

    const handleChangeService = e =>{
        setEdit({...edit, subType:e.target.value.type, skill: e.target.value.area})
    }

    const handleSelectChange = e =>{
        e.target.value === "products"
        ? setEdit({...edit, type: "products"})
        : setEdit({...edit, type: "services"})
    }

    const search = service =>{

    }

        return(
            <div className={classes.selects}>
            <FormControl variant="outlined" className={classes.formControl} >
                <Typography color="textSecondary">What I offer:</Typography>
                <Select onChange={handleSelectChange}>
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
                            <Typography color="textSecondary">products areas:</Typography>
                            <Select variant="outlined" onChange={handleChange} value={edit.subType.type}>
                                        {products.map((product, index) =>
                                            <MenuItem key={`${product}${index}`} name={product.type} value={product.type}>
                                                <Typography color="textSecondary">{product.type}</Typography>
                                            </MenuItem>
                                        )}
                                    </Select>
                            </FormControl>
                    :   <FormControl variant="outlined" className={classes.formControl}>
                            <Typography color="textSecondary">services areas:</Typography>
                            <Select variant="outlined" onChange={handleChangeService} value={edit.subType.type}>
                                        {services.map((service, index) =>
                                            <MenuItem key={`${service}${index}`} name={service.type} value={service}>
                                                <Typography color="textSecondary" >{service.type}</Typography>
                                            </MenuItem>
                                          
                                        )}
                                    </Select>
                        </FormControl>
                :null}
            </div>
        )
    }

export default SelectTypes;
