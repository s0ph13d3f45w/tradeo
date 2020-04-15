import React, {useState, forwardRef} from 'react'
import {FormControl, Typography, Select, MenuItem} from '@material-ui/core'

const SelectSubtype = forwardRef(({initialValues, setEdit, edit}, ref)=>{
    const [products] = useState(initialValues)
    const handleChange= e =>{
        setEdit({...edit, subType: e.target.value})
    }

    return(
        <FormControl style={{marginTop: 10}} ref={ref}>
            <Typography color="textSecondary">Account type:</Typography>
            <Select variant="outlined" onChange={handleChange} value={edit.subType}>
                {products.map((product, index) =>
                    <MenuItem key={`${product}${index}`} id={product.area} value={product.type}>
                        <Typography color="textSecondary">{product.type}</Typography>
                    </MenuItem>
                )}
            </Select>
        </FormControl>
    )
})

export default SelectSubtype