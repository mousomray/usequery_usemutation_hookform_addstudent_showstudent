import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { addStudent } from '../Api/apicall';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

const Addstudent = () => {

    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [loading, setLoading] = useState(false);

    const reg = async (data) => {

        setLoading(true);

        const amardata = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            city: data.city,
            address: data.address,
            state: data.state,
            section: data.section,
            classes: data.classes
        }

        try {
            const response = await addStudent(amardata)
            console.log("My Addstudent response is ", response);
            if (response && response?.status === 200) {
                reset(); // Blank form after submitting data
                navigate("/showstudent");
                setLoading(false);
            } else {
                setLoading(false);
            }
            return response
        } catch (error) {
            console.log("Error is make", error);
            setLoading(false);
        }

    };

    // Start Mutation Area
    const mutation = useMutation({
        mutationFn: reg,
    });


    // Handle On Submit Area
    const onSubmit = (data) => {
        mutation.mutate(data);
    };


    return (
        <>

            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 15,
                            marginBottom: 8,
                            padding: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.12)'
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Addstudent
                        </Typography>
                        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit(onSubmit)}>

                            <Grid container spacing={2}>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        type="text"
                                        id="name"
                                        label="Name"
                                        {...register("name", {
                                            required: "This field is Required",
                                            minLength: {
                                                value: 3,
                                                message: "Name must be 2 characters"
                                            }
                                        })}
                                    />
                                    {errors?.name && (
                                        <p style={{ color: 'red' }}>{errors.name.message}</p>
                                    )}

                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        type="email"
                                        id="email"
                                        label="Email"
                                        {...register("email", {
                                            required: "This field is required",
                                            pattern: {
                                                value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                message: "Email Pattern should be xyz@gmail.com",
                                            },
                                        })}
                                    />
                                    {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        type="number"
                                        id="phone"
                                        label="Phone"
                                        {...register("phone", {
                                            required: "This field is Required",
                                            minLength: {
                                                value: 10,
                                                message: "Phone number must be atleast 10 characters"
                                            },
                                            maxLength: {
                                                value: 10,
                                                message: "Phone number must be atleast 10 characters"
                                            }
                                        })}
                                    />
                                    {errors?.phone && (
                                        <p style={{ color: 'red' }}>{errors.phone.message}</p>
                                    )}

                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        type="text"
                                        id="city"
                                        label="City"
                                        {...register("city", {
                                            required: "This field is Required",
                                            minLength: {
                                                value: 3,
                                                message: "City must be atleast 3 characters"
                                            }
                                        })}
                                    />
                                    {errors?.city && (
                                        <p style={{ color: 'red' }}>{errors.city.message}</p>
                                    )}

                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        type="text"
                                        id="address"
                                        label="Address"
                                        {...register("address", {
                                            required: "This field is Required",
                                            minLength: {
                                                value: 3,
                                                message: "Address must be atleast 3 characters"
                                            }
                                        })}
                                    />
                                    {errors?.address && (
                                        <p style={{ color: 'red' }}>{errors.address.message}</p>
                                    )}

                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        type="text"
                                        id="state"
                                        label="State"
                                        {...register("state", {
                                            required: "This field is Required",
                                            minLength: {
                                                value: 3,
                                                message: "State must be atleast 3 characters"
                                            }
                                        })}
                                    />
                                    {errors?.state && (
                                        <p style={{ color: 'red' }}>{errors.state.message}</p>
                                    )}

                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        type="text"
                                        id="section"
                                        label="City"
                                        {...register("section", {
                                            required: "This field is Required",
                                            minLength: {
                                                value: 3,
                                                message: "Section must be atleast 3 characters"
                                            }
                                        })}
                                    />
                                    {errors?.section && (
                                        <p style={{ color: 'red' }}>{errors.section.message}</p>
                                    )}

                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        type="text"
                                        id="classes"
                                        label="Classes"
                                        {...register("classes", {
                                            required: "This field is Required",
                                            minLength: {
                                                value: 3,
                                                message: "Classes must be atleast 3 characters"
                                            }
                                        })}
                                    />
                                    {errors?.classes && (
                                        <p style={{ color: 'red' }}>{errors.classes.message}</p>
                                    )}

                                </Grid>

                            </Grid>


                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                {loading ? 'Please wait...' : 'Addstudent'}
                            </Button>

                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>


        </>
    )
}

export default Addstudent