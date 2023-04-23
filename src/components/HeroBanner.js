import React from "react";
import { Box, Button, Typography } from "@mui/material";
import banner from "../assets/images/banner.jpg";
import toy from "../assets/images/toy_img.png";
import Navbar from "./Navbar";

export default function HeroBanner()
{
    return(
        <Box sx={{background:`url(${banner})`, minHeight:"100vh", backgroundSize:"100% 100%", backgroundRepeat:"no-repeat"}}>
            <Navbar/>
            <Box sx={{ mt:{lg:"100px", xs:"50px"},ml:{sm:"50px"} }} position="realtive" p="20px">
                <Typography color="#FF2625" fontWeight="600" fontSize="25px" textTransform="uppercase">Fitness Club</Typography>
                <Typography fontWeight="700" sx={{fontSize:{lg:"40px", xs:"35px"}}} mb="23px" mt="30px">Sweet, Smile and Repeat</Typography>
                <Typography fontSize="23px" lineHeight="35px" mb={4}>Check out the most effective exercises</Typography>
                <Button href="#exercises" sx={{ backgroundColor:"transparent", padding:"10px", color:"#FF2625", border:"1px solid #FF2625"}}>Explore Exercises</Button>
                <img src={toy} alt="toy" className="hero-banner-img"/>
            </Box>
        </Box>
    );
}