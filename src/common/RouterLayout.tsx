import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";

interface Props {
    setLogin: (value: boolean) => void;
}

export const RouterLayout: React.FC<Props> = ({ setLogin }) => {
    return (
        <>
            <NavBar setLogin={setLogin}/>
            <Outlet />
        </>
    );
};