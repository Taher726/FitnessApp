import React from "react";
import "./style.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./components/Home";
import ExerciseDetail from "./components/ExerciseDetail";
import Footer from "./components/Footer";

export default function App()
{
    return(
        <Box width="100%" sx={{ width:{xl:"100%"}}}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
            </Routes>
            <Footer/>
        </Box>
    );
}