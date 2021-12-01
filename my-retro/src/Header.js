import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Header = () => {
    return (
        <Paper elevation={3} sx={{
            display: 'flex',
            height: 100,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Typography variant='h5'>
                My Retro
            </Typography>
        </Paper>
    );
}

export default Header;
