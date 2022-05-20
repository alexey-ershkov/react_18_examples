import {ConcurrencyWrapper} from './styled';
import {List, ListItem, ListItemText, TextField, Typography} from '@mui/material';
import React, {ChangeEvent, FC, useDeferredValue, useState, useTransition} from 'react';

interface Item {
    id: number;
    text: string;
}

interface ListProps {
    items: Item[];
}

const src = new Array(3000).fill({}).map<Item>((elem, id) => ({id, text: `Item ${id}`}));

const filter = (by: string) => {
    return by ? src.filter(elem => elem.text.includes(by)) : src;
};

const Items: FC<ListProps> = ({items}) => {
    // const deferredItems = useDeferredValue(items)

    return (
        <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper', height: '90%', overflowY: 'scroll'}}>
            {items.map(({id, text}) => (
                <ListItem key={id}>
                    <ListItemText primary={text}/>
                </ListItem>
            ))}
        </List>
    );
};

export const Concurrency = () => {
    const [filterValue, setFilterValue] = useState<string>("");
    // const [isPending, startTransition] = useTransition();

    const items = filter(filterValue);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFilterValue(e.target.value)
        // startTransition(() => setFilterValue(e.target.value));
    };

    return <ConcurrencyWrapper>
        <Typography variant="h1" gutterBottom>Concurrency</Typography>
        {/*<Typography variant="h1" gutterBottom>{isPending ? "Filtering..." : "Concurrency"}</Typography>*/}
        <TextField
            variant="outlined"
            placeholder="Filter"
            onChange={handleChange}/>
        <Items items={items}/>
    </ConcurrencyWrapper>;
};