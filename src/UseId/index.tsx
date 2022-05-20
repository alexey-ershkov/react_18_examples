import {Typography} from '@mui/material';
import {Center} from '../common/Center';
import React, {useId} from 'react';

export const UseId = () => {
    const id1 = useId();
    const id2 = useId();
    const id3 = useId();


    return (
        <Center>
            <Typography variant="h1" gutterBottom>UseId</Typography>
            <div>Id 1: {id1}</div>
            <div>Id 2: {id2}</div>
            <div>Id 3: {id3}</div>
        </Center>
    );
};