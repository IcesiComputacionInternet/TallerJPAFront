import React from 'react';
import {TextField, Button, Grid, Container, Paper, Typography, Box} from '@mui/material';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface Props {
    register: UseFormRegister<FieldValues>;
    onSubmit: any;
}

const LoginForm: React.FC<Props> = ({ register, onSubmit }) => {
    return (
        <Container maxWidth="sm">
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: "100vh" }}
            >
                <Grid item>
                    <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
                        <Typography sx={{ mt: 1, mb: 1 }} variant="h4">
                            Iniciar sesion
                        </Typography>
                        <Box component="form" onSubmit={onSubmit}>
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
                                sx={{ mt: 1.5, mb: 3 }}
                            >
                                Iniciar sesion
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default LoginForm;
