import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

export default function Navbar()
{
    return(
        <Stack direction="row" sx={{alignItems:"center",background:"transparent" ,gap: {sm:"122px", xs:"40px"},justifyContent:{lg:"space-around", sm:"none"}}} p="20px">
            <Link to="/"><img src={Logo} alt="logo" style={{margin:"0 20px", width:"200px"}} sx={{}}/></Link>
            <Stack sx={{flexDirection:{lg:"row"}}} gap="40px" fontSize="20px" alignItems="flex-end">
                <Link to="/" style={{textDecoration:"none", color:"#3A1212", borderBottom:"3px solid #FF2625"}}>Home</Link>
                <a href="/#exercises" style={{textDecoration:"none", color:"#3A1212"}}  className="navbarItem">Exercises</a>
                <a href="/#search" style={{textDecoration:"none", color:"#3A1212"}} className="navbarItem">Search</a>
            </Stack>
        </Stack>
    );
}