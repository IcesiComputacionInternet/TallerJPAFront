import {
    AppBar,
    Box,
    Button,
    Container,
    Grid,
    Stack,
    Toolbar,
    Typography,
} from "@mui/material";
import React from "react";

interface Props {
    setLogin: (value: boolean) => void;
}

export const NavBar: React.FC<Props> = ({ setLogin }) => {
    let user = localStorage.getItem("user");
    if (user != null) {user = user.replace(/['"]+/g, '');}

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setLogin(false);
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Grid item>
                                <Typography>{user}</Typography>
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing={2}>
                                    <Button variant="outlined" onClick={logout}>LogOut</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
};