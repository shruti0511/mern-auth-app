import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { logoutService } from '../service/authService';
import { authActions } from '../store';

const Header = () => {
    const [tabValue, settabValue] = useState();
    const isLoggedIn = useSelector(state => state.isLoggedIn);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () =>{
        logoutService()
        .then(() => {
            dispatch(authActions.logout());
            navigate("/login")
        })
        .catch(err => console.log(err))
    }
    return (
        <Box>
            <AppBar position='sticky'>
                <Toolbar>
                    <Typography variant='h5'>Travel Log App</Typography>
                    <Box sx={{ marginLeft: "auto" }}>
                        <Tabs
                            onChange={(e, val) => { settabValue(val) }}
                            value={tabValue}
                            textColor='inherit'
                            indicatorColor='secondary'
                        >
                            {
                                !isLoggedIn &&
                                <>
                                <Tab to="/login" LinkComponent={Link} label="Login"></Tab>
                            <Tab to="/signup" LinkComponent={Link} label="Signup"></Tab>
                            </>
                            }{" "}
                            {
                                isLoggedIn &&
                                <Tab onClick={handleLogout} to="/" LinkComponent={Link} label="Logout"></Tab>
                            }{" "}


                        </Tabs>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header