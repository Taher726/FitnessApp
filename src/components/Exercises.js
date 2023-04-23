import React, { useEffect, useState } from "react";
import { Box, Typography, Stack, Pagination } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import { fetchData, exercisesOptions } from "../utils/fetchData";

export default function Exercises({ exercises, setExercises, bodyPart })
{
    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 9;
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
    const paginate = (e,value)=> {
        setCurrentPage(value);
        window.scrollTo({top:1400, behavior:"smooth"})
    }
    useEffect(()=>{
        const fetchExercisesData = async ()=>{
            let exercisesData =[]
            if(bodyPart==="all"){
                exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exercisesOptions)
            }
            else{
                exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exercisesOptions);
            }
            setExercises(exercisesData)
        }
        fetchExercisesData();
    },[bodyPart])
    return(
        <Box id="exercises" sx={{mt: {lg:"80px"}, textDecoration:"none"}} mt="50px" p="20px"> 
            <Typography fontWeight="700" mb="50px" textAlign="center" sx={{fontSize:{lg:"44px",xs:"30px"}}}>Exercises <span style={{color:"#FF2625"}}>Results</span></Typography>
            <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{gap:{lg:"80px", xs:"50px"}}}>
                {currentExercises.map((exercise, index)=>(
                    <ExerciseCard key={index} exercise={exercise}/>
                ))}
            </Stack>
            <Stack mt="100px" alignItems="center">
                {exercises.length > 9 && (
                    <Pagination color="standard" shape="rounded" defaultPage={1} count={Math.ceil(exercises.length / exercisesPerPage)} page={currentPage} onChange={paginate} size="large"/>
                )}
            </Stack>
        </Box>
    )
}