import React from "react";
import { Stack, Typography } from "@mui/material";

export default function BodyPart({item, source, bodyPart, setBodyPart})
{
    return(
        <Stack sx={{borderRadius:"20px",backgroundColor:"#fff", width:{lg:"270px",sm:"230px", xs:"230px"}, height:{lg:"250px",sm:"210px",xs:"210px"}, cursor:"pointer", gap:"47px", boxShadow:bodyPart===item?"0px 4px 8px rgba(255, 38, 37, 0.6)":"0px 4px 8px rgba(0,0,0,0.6)"}} type="button" alignItems="center" justifyContent="center" className="bodyPart-card" onClick={()=>{setBodyPart(item); window.scrollTo({top:1400, left:100, behavior:"smooth"})}}>
            <img src={source} alt="dumbbell" style={{ width:"60px", height:"60px" }}/>
            <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">{item}</Typography>
        </Stack>
    );
}