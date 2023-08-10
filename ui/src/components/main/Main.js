import { Box, Container, Stack } from "@mui/material";
import Posts from "../posts/Posts";
import Rightbar from "../rightbar/Rightbar";
import Hero from "../hero/Hero";

//This is the main javascript file

const Main = () => {
    return (
        <>
        <Hero />
        <Container>
        <Stack direction={'row'} spacing={1} mt={3}
        /* 
        Creating a stack that will contain the posts of the main webpage.
        There are two boxes: for the posts and the rightbar. Rightbar has
        low flex since we don't want much to show up there. Container 
        makes sure that the postcards are part of the main so they don't
        take the left spaces or go all the way to the left.
        */
        >
            <Box flex={3}>
                <Posts />
            </Box>
            <Box flex={1} display={{xs:'none', md:'block'}}>
                <Rightbar />
            </Box>
        </Stack>
        </Container>
        </>
    );
};

export default Main;