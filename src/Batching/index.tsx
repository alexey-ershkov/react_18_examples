import {Button, Typography} from '@mui/material';
import React, {useEffect, useState} from 'react';
import {Center} from '../common/Center';

import {flushSync} from 'react-dom';

let renderTimes = 0;
let mountTimes = 0;
let unmountedTimes = 0;

export const Batching = () => {

    const [innerState, setInnerState] = useState(0);
    const [anotherInnerState, setAnotherInnerState] = useState(0);

    renderTimes++;

    useEffect(() => {
        mountTimes++;
        return () => {
            unmountedTimes++;
        };
    }, []);

    const update = () => {
        // setTimeout(() => {
        //     flushSync(() => setInnerState(innerState + 2));
        //     flushSync(() => setAnotherInnerState(anotherInnerState + 1));
        // });

        // setTimeout(() => {
        //     setInnerState(innerState + 2);
        //     setAnotherInnerState(anotherInnerState + 1);
        // });

        setInnerState(innerState + 2);
        setAnotherInnerState(anotherInnerState + 1);
    };

    return (
        <Center>
            <Typography variant="h1" gutterBottom>Batching</Typography>
            <div>Inner state: {innerState}</div>
            <div>Another Inner State: {anotherInnerState}</div>
            {/*<div>Render times: {renderTimes}</div>*/}
            {/*<div>Mount times: {mountTimes}</div>*/}
            {/*<div>Unmount times: {unmountedTimes}</div>*/}
            <Button onClick={update} size="large" variant="contained" sx={{marginTop: '30px'}}>Update states</Button>
        </Center>
    );
};