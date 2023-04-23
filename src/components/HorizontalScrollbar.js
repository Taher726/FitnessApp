import React, { useContext } from "react";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography } from "@mui/material";
import BodyPart from "./BodyPart";
import back from "../assets/icons/back.png";
import cardio from "../assets/icons/cardio.png";
import chest from "../assets/icons/chest.png";
import arms from "../assets/icons/arm.svg";
import legs from "../assets/icons/legs.png";
import neck from "../assets/icons/neck.png";
import shoulders from "../assets/icons/shoulders.png";
import waist from "../assets/icons/waist.png";
import all from "../assets/icons/icon1.png";
import ExerciseCard from "./ExerciseCard";

const icnos={
    all:all,
    back:back,
    cardio:cardio,
    chest:chest,
    "lower arms":arms,
    "lower legs":legs,
    neck:neck,
    shoulders:shoulders,
    waist:waist,
    "upper arms":arms,
    "upper legs":legs
}

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
};
  
const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
};

export default function HorizontalScrollbar({ data, bodyPart, setBodyPart, isBodyParts })
{
    return(
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {data.map((item)=>(
                <Box key={item.id || item} itemID={item.id || item} title={item.id || item} m="0 20px" p="10px 0">
                    {isBodyParts ? <BodyPart item={item} source={icnos[item]} bodyPart={bodyPart} setBodyPart={setBodyPart}/> : <ExerciseCard exercise={item}/>}
                </Box>
            ))}
        </ScrollMenu>
    );
}