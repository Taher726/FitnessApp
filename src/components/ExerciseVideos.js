import React from "react";
import { Typography, Box, Stack } from "@mui/material";

export default function ExerciseVideos({ exerciseVideos, name })
{
    return(
        <Box p="20px" sx={{mt:{lg:"50px", xs:"20px"}}}>
            <Typography fontWeight="700" mb="40px" borderBottom="2px solid #ff2625" sx={{fontSize:{lg:"44px",xs:"30px"}}}>Watch <span style={{color:"#FF2625"}}>{name}</span> exercise video</Typography>
            <Stack flexWrap="wrap" justifyContent="flex-start" alignItems="center" sx={{gap:{lg:"110px",xs:"15px"}, flexDirection:{lg:"row"}}}>
                {exerciseVideos.slice(0,3).map((item,index)=>(
                    <a href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target="_blank" rel="noreferrer" key={index} className="exerciseVideo">
                        <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
                        <Box p="10px">
                            <Typography variant="h6" color="#000" sx={{ height:"70px"}}>
                                {item.video.title}
                            </Typography>
                            <Typography variant="h7" color="#ff2625">
                                {item.video.channelName}
                            </Typography>
                        </Box>
                    </a>
                ))}
            </Stack>
        </Box>
    );
}