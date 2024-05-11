import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled } from '@mui/system';

const FormWrapper = styled('div')(({ theme }) => ({
    margin: theme.spacing(1),
}));

const buttons = [
    { text: 'Linear Search', value: 0 },
    { text: 'Binary Search', value: 1 },
]
const SimpleSelect = ({ pos, onAlgoChanged }) => {
    const [algo, setAlgo] = useState(0);
    // const [state, setState] = useState({
    //   pos: props.pos,
    // });

    const handleChange = (event) => {
        setAlgo(event);
        onAlgoChanged(pos, event);
    };

    return (
        <>
            {buttons.map((val, key) => (
                <MenuItem onClick={() => handleChange(val.value)} value={val.value} selected={val.value === algo} sx>{val.text}</MenuItem>
            ))}

        </>
    );
};

export default SimpleSelect;
