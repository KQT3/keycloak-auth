import React, {useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import MainRoutes from "../routes/MainRoutes";
import {CssBaseline} from "@mui/material";
import {RootModelProvider} from "./RootModelContext";

export default function Root() {
    return (
        <RootModelProvider>
            <BrowserRouter>
                <CssBaseline/>
                <MainRoutes/>
            </BrowserRouter>
        </RootModelProvider>
    )
}
