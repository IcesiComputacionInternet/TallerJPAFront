import React from 'react';
import { Container, Grid } from '@mui/material';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import LoginForm from '../../components/loginForm/LoginForm';
import AuthService from "../../services/AuthService.ts";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface Props {
    setLogin: (value: boolean) => void;
}

export const Login: React.FC<Props> = ({ setLogin }) => {
    const navigation: NavigateFunction = useNavigate();

    const { register, handleSubmit } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        AuthService.login(data.email, data.password).then(() =>{
            setLogin(true);
            navigation("/");
        });
    };

    return (
        <Container>
            <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
                <Grid item xs={12} sm={8} md={6}>
                    <LoginForm register={register} onSubmit={handleSubmit(onSubmit)} />
                </Grid>
            </Grid>
        </Container>
    );
};
