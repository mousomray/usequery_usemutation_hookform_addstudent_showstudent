import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../Api/api"


const defaultTheme = createTheme();


const Addstudent = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false); // For Loading


    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    // Function For Mutation
    const registerUser = async (data) => {

        const myregdata = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            city: data.city,
            address: data.address,
            state: data.state,
            section: data.section,
            classes: data.classes
        }

        const response = await addStudent(myregdata);
        console.log("My Reg response is ", response);
        // if (response && response?.message === "student added successfully") {
        //     reset();
        //     navigate('/showstudent');
        //     setLoading(false);
        // } else {
        //     setLoading(false);
        // }
        return response.data;
    };

    // Start Mutation Area
    const mutation = useMutation({
        mutationFn: (data) => registerUser(data),

        // If Success
        onSuccess: () => {
            setLoading(false)
            reset();
            navigate("/showstudent");
        },

        // If Error
        onError: () => {
            // Add error handling logic here
            setLoading(false)
        },
    });


    // Handle On Submit Area
    const onSubmit = (data) => {
        mutation.mutate(data);
        setLoading(true);
    };


    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <Paper
                    elevation={5}
                    style={{
                        padding: "1rem 3rem",
                        marginTop: "1rem",
                        width: "35rem",
                        marginBottom: "1rem",
                    }}
                >
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Add Student
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit(onSubmit)}
                            sx={{ mt: 3 }}
                        >
                            <Grid container spacing={2}>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="name"
                                        label="Name"
                                        {...register("name", {
                                            required: "This field is Required",
                                            minLength: {
                                                value: 3,
                                                message: "Name must be atleast 3 characters"
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
                                                message: "Phone number must be 10 characters"
                                            },
                                            maxLength: {
                                                value: 10,
                                                message: "Phone number must be 10 characters"
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
                                        id="section"
                                        label="Section"
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
                                        id="classes"
                                        label="Classes"
                                        {...register("classes", {
                                            required: "This field is Required",
                                            minLength: {
                                                value: 3,
                                                message: "Class must be atleast 3 characters"
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
                                {loading ? "Loading..." : "Add Student"}
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </ThemeProvider>
    );
};

export default Addstudent;
