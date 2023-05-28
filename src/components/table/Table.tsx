import React from "react";
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

interface Props {
    accounts: any[];
}
export const AccountTable: React.FC<Props> = ({ accounts }) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    {accounts[0] && Object.keys(accounts[0]).map((key) => (
                        <TableCell key={key}>{key}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {accounts.map((account, index) => (
                    <TableRow key={index}>
                        {Object.values(account).map((value: any, index) => (
                            <TableCell key={index}>
                                {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
