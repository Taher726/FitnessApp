import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Box } from "@mui/material";
import Detail from "./Detail";
import { fetchData, exercisesOptions, youtubeOptions } from "../utils/fetchData";
import { useParams } from "react-router-dom";
import ExerciseVideos from "./ExerciseVideos";
import SimilarExercises from "./SimilarExercises";

export default function ExerciseDetail()
{
    const[exerciseDetail, setExerciseDetail]=useState({});
    const[exerciseVideos, setExerciseVideos] = useState([]);
    const[targetMuscleExercise, setTargetMuscleExercise] = useState([]);
    const[equipmentExercise, setEquipmentExercise]=useState([]);
    const { id } = useParams();
    useEffect(()=>{
        window.scrollTo({top:0, behavior:"smooth"});
        const fetchExercisesData = async () =>{
            const exerciseURl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
            const exerciseDetailData = await fetchData(`${exerciseURl}/exercises/exercise/${id}`,exercisesOptions);
            setExerciseDetail(exerciseDetailData);
            const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions);
            setExerciseVideos(exerciseVideosData.contents);
            const targetMuscleExerciseData = await fetchData(`${exerciseURl}/exercises/target/${exerciseDetailData.target}`,exercisesOptions);
            const equipmentExerciseData = await fetchData(`${exerciseURl}/exercises/equipment/${exerciseDetailData.equipment}`,exercisesOptions);
            setTargetMuscleExercise(targetMuscleExerciseData);
            setEquipmentExercise(equipmentExerciseData);
        }
        fetchExercisesData();
    },[id])
    return(
        <Box>
            <Box sx={{backgroundColor:"#FFFAFB"}}>
                <Navbar/>
            </Box>
            <Detail exerciseDetail={exerciseDetail}/>
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
            <SimilarExercises targetMuscleExercise={targetMuscleExercise} equipmentExercise={equipmentExercise}/>
        </Box>
    );
}