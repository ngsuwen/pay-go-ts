import {useContext} from 'react';
import { Typography, Select, FormControl, MenuItem, InputLabel, Box, SelectChangeEvent } from '@mui/material';
import { SortContext } from '../../../App';

export default function SortOption() {
    const [sort, setSort]=useContext(SortContext)
    
    const handleChange = (event: SelectChangeEvent) => {
        setSort(event.target.value);
    };

    return (
        <Box sx={{ maxWidth: 200, marginBottom: 10 }}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                <InputLabel><Typography variant="body2" color="textSecondary">Sort by:</Typography></InputLabel>
                <Select
                    value={sort}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em><Typography variant="body2" color="textSecondary">None</Typography></em>
                    </MenuItem>
                    <MenuItem value={'title'}><Typography variant="body2" color="textSecondary">Name</Typography></MenuItem>
                    <MenuItem value={'price'}><Typography variant="body2" color="textSecondary">Price (low to high)</Typography></MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}