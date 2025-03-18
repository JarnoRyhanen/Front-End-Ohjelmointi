import { Box, Tabs, Tab } from '@mui/material';
import React, { useState } from 'react';
import Todolist from './Todolist';

const BasicTabs = () => {

    const [value, setValue] = useState('home');

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
            >
                <Tab value="home" label="Home" />
                <Tab value="todos" label="Todos" />
            </Tabs>
            {value === 'home' &&
                <div>
                    <h1 className='font-bold text-3xl text-blue-600 text-center '>
                        Welcome to the Home page from tab!
                    </h1>
                </div>}
            {value === 'todos' && <Todolist />}
        </Box>
    );
}

export default BasicTabs;