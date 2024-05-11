import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const buttons = [
    { text: 'Bubble Sort', value: 0 },
    { text: 'Selection Sort', value: 1 },
    { text: 'Insertion Sort', value: 2 },
    { text: 'Quick Sort', value: 3 },
]
const SimpleSelect = (props) => {
    const [algo, setAlgo] = useState(0);
    // const [state, setState] = React.useState({
    //     pos: props.pos,
    // });
    const handleChange = (event) => {
        setAlgo(event);
        props.onAlgoChanged(props.pos, event);
        // props.onRandomize();
    };

    return (
        <div className="w-full">
            {/* <FormControl variant="standard" disabled={props.disable}>
                <InputLabel id="demo-simple-select-label">Algorithm</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={algo}
                    onChange={handleChange}
                > */}
            {buttons.map((val, key) => (
                <MenuItem onClick={() => handleChange(val.value)} value={val.value} selected={val.value === algo} sx>{val.text}</MenuItem>
            ))}
        </div>
    );
}

export default SimpleSelect;