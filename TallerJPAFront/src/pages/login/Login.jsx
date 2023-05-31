import React from 'react';
import { Container, Grid,Paper, Typography,Box, TextField, Button } from '@mui/material';
import AuthenticationService from "../../services/AuthenticationService";
import { useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form'
import { useState } from 'react';




const Login = ({ setIsLoggedIn }) => {
  const navigation = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data.email)
    console.log(data.password)
    AuthenticationService.login(data.email, data.password).then(() => {
      setIsLoggedIn(true);
      navigation("/");
    });
  };

  return (
    <Container sx={{height: '100vh', width:'100vw'}}>
      <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <Grid item xs={12} sm={8} md={6}>
          <Container maxWidth="lg">
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={{ minHeight: "100vh" }}
            >
              <Grid item>
                <Paper sx={{ padding: "1.2em", borderRadius: "0.5em", backgroundColor: "#EEFFF8"}}>
                  <Typography sx={{ mt: 1, mb: 1 }} variant="h3">
                    Login
                  </Typography>
                  <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                    {...register('email')}
                      margin="normal"
                      type="email"
                      fullWidth
                      label="Email"
                      sx={{ mt: 2, mb: 1.5 }}
                      required
                    />
                    <TextField
                      {...register('password')}
                      margin="normal"
                      type="password"
                      fullWidth
                      label="Password"
                      sx={{ mt: 2, mb: 1.5 }}
                      required
                    />

                    <Button
                      fullWidth
                      type="submit"
                      variant="contained"
                      sx={{ mt: 1.5, mb: 3, backgroundColor: "#f44336", color: "#fff" }}
                    >
                      Iniciar sesion
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;