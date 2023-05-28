import React, {useEffect, useState} from "react";
import {Container} from "@mui/material";
import AccountsService from "../../services/AccountsService.ts";
import {AccountTable} from "../../components/table/Table.tsx";

export const Home: React.FC = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        AccountsService.getAllByUser().then((response) => {
            setAccounts(response)
        });
    }, [])

    return (
        <Container sx={{ mt: 9 }} maxWidth="xl">
            <AccountTable accounts={accounts} />
        </Container>
    );
};