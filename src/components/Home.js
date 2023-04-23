import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "./HeroBanner";
import SearchExercises from "./SearchExercises";
import Exercises from "./Exercises";

export default function Home()
{
    const[exercises, setExercises] = useState([]);
    const[bodyPart, setBodyPart] = useState("all");
    return(
        <Box>
            <HeroBanner/>
            <SearchExercises bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises}/>
            <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises}/>
        </Box>
    );
}