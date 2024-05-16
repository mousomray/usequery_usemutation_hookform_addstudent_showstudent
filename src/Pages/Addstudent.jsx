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


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();


    const registerUser = async (data) => {
        const response = await addStudent(data);
        return response.data;
    };


    // Mutation Area 
    const mutation = useMutation({
        mutationFn: (data) => registerUser(data),
        onSuccess: (data) => {
            setLoading(false)
            reset();
            navigate("/showstudent");
        },
        onError: (error) => {
            // Add error handling logic here
            setLoading(false)
        },


    });

    // Function For Handle Submit
    const onSubmit = (e) => {
        mutation.mutate(e);
        setLoading(true)
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
                                        {...register("name", { required: true, minLength: 3 })}
                                    />
                                    {errors.name && (
                                        <p style={{ color: "red" }}>This field is required</p>
                                    )}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        {...register("email", { required: true, maxLength: 50 })}
                                        autoComplete="email"
                                    />
                                    {errors.email && (
                                        <p style={{ color: "red" }}>This field is required</p>
                                    )}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="phone"
                                        label="Phone"
                                        {...register("phone", { required: true, maxLength: 10 })}
                                    />
                                    {errors.phone && (
                                        <p style={{ color: "red" }}>This field is required</p>
                                    )}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        {...register("city", { required: true, minLength: 3 })}
                                        label="City"
                                        type="text"
                                        id="city"
                                    />
                                    {errors.city && (
                                        <p style={{ color: "red" }}>This field is required</p>
                                    )}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        {...register("address", { required: true, minLength: 3 })}
                                        label="Address"
                                        type="text"
                                        id="address"
                                    />
                                    {errors.address && (
                                        <p style={{ color: "red" }}>This field is required</p>
                                    )}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        {...register("state", { required: true, minLength: 3 })}
                                        label="State"
                                        type="text"
                                        id="state"
                                    />
                                    {errors.state && (
                                        <p style={{ color: "red" }}>This field is required</p>
                                    )}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        {...register("section", { required: true, minLength: 3 })}
                                        label="Section"
                                        type="text"
                                        id="section"
                                    />
                                    {errors.section && (
                                        <p style={{ color: "red" }}>This field is required</p>
                                    )}
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        {...register("classes", { required: true, minLength: 3 })}
                                        label="Classes"
                                        type="text"
                                        id="classes"
                                    />
                                    {errors.classes && (
                                        <p style={{ color: "red" }}>This field is required</p>
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
