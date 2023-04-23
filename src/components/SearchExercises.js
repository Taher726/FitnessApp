import React, { useEffect, useState } from "react";
import { exercisesOptions, fetchData } from "../utils/fetchData";
import { Stack, Box, Typography, TextField, Button} from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";

export default function SearchExercises({ bodyPart, setBodyPart, setExercises })
{
    const[search, setSearch] = useState("");
    const[bodyParts, setBodyParts] = useState([]);
    useEffect(()=>{
        const fetchExercisesData = async ()=>{
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exercisesOptions);
            setBodyParts(["all", ...bodyPartsData]);
        }
        fetchExercisesData();
    },[])
    const handleChange = async()=>{
        if(search){
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);
            const searchedExercises = exercisesData.filter((exercise)=>exercise.name.toLowerCase().includes(search)||
            exercise.target.toLowerCase().includes(search) ||
            exercise.equipment.toLowerCase().includes(search) ||
            exercise.bodyPart.toLowerCase().includes(search));
            setSearch("");
            setExercises(searchedExercises);
            window.scrollTo({top:1400, left:100, behavior:"smooth"});
        }
    }
    return(
        <Stack justifyContent="center" alignItems="center" p="20px" mt="30px" id="search">
            <Typography fontWeight="700" mb="50px" textAlign="center" sx={{fontSize:{lg:"44px",xs:"30px"}}}>Search For Your <span style={{color:"#FF2625"}}>Exercise</span></Typography>
            <Box position="relative" mb="72px">
                <TextField placeholder="Search Exercises" type="text" height="76px" sx={{ input:{fontWeight:"700", border:"none", borderRadius:"10px"}, width:{lg:"800px", xs:"350px"}, backgroundColor:"#fff"}} onChange={(e)=>setSearch(e.target.value.toLowerCase())}/>
                <Button onClick={handleChange} className="search-btn" sx={{bgcolor:"#fff", color:"#FF2625", border:"1px solid #FF2625", textTransform:"none", height:"56px", width:{lg:"175px", xs:"80px"}, position:"absolute", right:"0px", fontSize:{lg:"20px", xs:"14px"}}}>Search</Button>
            </Box>
            <Box sx={{ position:"relative", width:"100%", p:"20px" }}>
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
            </Box>
        </Stack>
    )
}