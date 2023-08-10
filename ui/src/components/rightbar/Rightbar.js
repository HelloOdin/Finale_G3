import { Box, CardMedia, Container, Typography } from "@mui/material";
import React from "react";
import critic from '../../static/critic.jpg';

const Rightbar = () => {
    return (
        <Container style={{ background: "#f9f1e8" }}>
        <Box sx={{padding:1}}>
        <Typography variant="h4" align="center" fontWeight={"bold"}>
            {" "}
            About 

            </Typography>
            <Typography variant="h4" align="center" color={"#f4c947"} fontWeight={"bold"}>
            Us{" "}
            </Typography>
            <CardMedia 
                component={'img'} 
                height='300' 
                image={critic} 
                alt="Photo of CampusEats Authors"
                sx={{
                    width:'400px', 
                    cursor:'pointer', 
                    "&hover":{
                        opacity:0.8,
                        boxSizing:'border-box',
                        zIndex:1,
                        transition:`all 0.50s ease`
                    },
                }}
                />
                <Typography variant="h5" align="left" color={"#677e34"}>
                    Welcome to CampusEats, your ultimate online destinatin for exploring diverse range of delicious and nutritious food options right here at DLSU.
                </Typography>
                <Typography variant="h5" align="left" color={"#677e34"}>
                    <br></br>Please use this page in order to know the popular food stalls and their specialties. This will be updated so tune in from time-to-time!
                </Typography>
        </Box>
        </Container>
    );
};

export default Rightbar