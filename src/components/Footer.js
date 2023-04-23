import React from "react";
import { Box, Typography, Stack } from "@mui/material";

export default function Footer()
{
    return(
        <Box mt="80px" bgcolor="#fff2db">
            <Stack gap="5px" alignItems="center">
                <Typography variant="h5" mt="20px">Made By Taher</Typography>
                <Typography variant="h5" mb="20px" color="#ff2625">Version 1.0</Typography>
            </Stack>
        </Box>
    );
}