import {  Box, Button, createTheme, TextField, ThemeProvider, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Formik } from "formik"
import { loginService } from '../service/authService';
import { useNavigate } from 'react-router-dom';
import { red } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';

const theme = createTheme({
    typography: {
        heading: {
            color: 'primary',
            fontSize: 48,
            fontWeight: 550,
        },
        errorText: {
            color: red[500],
            fontSize: 14
        }
    },
});

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    return (
        <ThemeProvider theme={theme}>
            <Formik

                initialValues={{ email: '', password: '' }}
                // validationSchema={Validation}
                onSubmit={(values, { setSubmitting }) => {
                    loginService(values)
                        .then(val => {
                            if (val.status === 200) {
                                dispatch(authActions.login())
                                navigate("/user");
                            }
                        })
                        .catch(err => {
                            setError(err.response.data);
                            console.log(err.response.data)
                        });
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    setFieldValue,
                    isSubmitting
                }) => (
                    <form onSubmit={handleSubmit}>

                        <Box
                            marginLeft="auto"
                            marginRight="auto"
                            justifyContent="center"
                            alignItems="center"
                            display="flex"
                            width={350}
                            flexDirection="column"
                            marginTop={10}

                        >
                            <Typography variant='heading' margin="normal" marginBottom={5}>Log In</Typography>


                            <TextField
                                variant='outlined'
                                label='Email'
                                margin='normal'
                                fullWidth
                                name='email'
                                type="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {(error !== null ) && (error.email !== null) && <Typography variant="errorText" align='left' sx={{textAlign: 'left'}}>
                                {error.email}
                            </Typography>}

                            <TextField
                                variant='outlined'
                                label='Password'
                                margin='normal'
                                fullWidth
                                name='password'
                                type="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {(error !== null ) && (error.password !== null) && <Typography variant="errorText" align='left'>
                                {error.password}

                            </Typography>}
                            {(error !== null ) && (error.passwordincorrect !== null) && <Typography variant="errorText" align='left'>
                                {error.passwordincorrect}

                            </Typography>}
                            <Button variant="contained" size="large" type="submit" sx={{marginTop:'30px'}}>LogIn</Button>

                        </Box>
                    </form>

                )}
            </Formik>
        </ThemeProvider>
    )
}

export default Login