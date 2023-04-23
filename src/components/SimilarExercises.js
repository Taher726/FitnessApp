import React from "react";
import { Box, Typography } from "@mui/material";
import Loader from "./Loader";
import HorizontalScrollbar from "./HorizontalScrollbar";

export default function SimilarExercises({ equipmentExercise, targetMuscleExercise })
{
    return(
        <Box sx={{mt:"100px", xs:"0px"}}p="20px">
            <Typography fontWeight="700" mb="40px" borderBottom="2px solid #ff2625" sx={{fontSize:{lg:"44px",xs:"30px"}}}>Similar <span style={{color:"#FF2625"}}>Target Muscle</span> exercises</Typography>
            <Box position="relative" width="100%">
                {targetMuscleExercise.length!==0? <HorizontalScrollbar data={targetMuscleExercise}/>: <Loader/>}
            </Box>
            <Typography fontWeight="700" mb="40px" borderBottom="2px solid #ff2625" sx={{fontSize:{lg:"44px",xs:"30px"}}}>Similar <span style={{color:"#FF2625"}}>Equipment</span> exercises</Typography>
            <Box position="relative" width="100%">
                {equipmentExercise.length!==0? <HorizontalScrollbar data={equipmentExercise}/>: <Loader/>}
            </Box>
        </Box>
    );
}