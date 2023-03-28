import { Box, Button, createTheme, TextField, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import { Formik } from "formik"
import { signupService } from '../service/authService';

const theme = createTheme({
    typography: {
        heading: {
            color: 'primary',
            fontSize: 48,
            fontWeight: 550,
        },
    },
});

const Signup = () => {
    return (
        <ThemeProvider theme={theme}>
            <Formik

                initialValues={{ name: '', email: '', password: '', password2: '' }}
                // validationSchema={Validation}
                onSubmit={(values, { setSubmitting }) => {
                    signupService(values)
                        .then(val => {
                            console.log(val)
                        })
                        .catch(err => {
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
                            <Typography variant='heading' margin="normal" marginBottom={5}>Sign Up</Typography>

                            <TextField
                                variant='outlined'
                                label='Name'
                                margin='normal'
                                fullWidth
                                name='name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />



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
                            <TextField
                                variant='outlined'
                                label='Confirm Password'
                                margin='normal'
                                fullWidth
                                name='password2'
                                type="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password2}
                            />
                            <Button variant="contained" size="large" type="submit">SIGNUP</Button>

                        </Box>
                    </form>

                )}
            </Formik>
        </ThemeProvider>
    )
}

export default Signup