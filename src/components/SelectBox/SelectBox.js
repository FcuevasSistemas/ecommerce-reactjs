import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';



const SelectBox = () => {
    return (
        <div className='selectbox'>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-simple-select-label">Talle</InputLabel>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select">
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={10.5}>10.5</MenuItem>
        <MenuItem value={11}>11</MenuItem>
    </Select>
    </FormControl>
    </div>
    )
}

export default SelectBox