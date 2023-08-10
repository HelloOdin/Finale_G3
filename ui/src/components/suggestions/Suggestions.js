import { Box, Link, Stack, Typography, styled } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Suggestions = () => {
    
  const [cat, setCat] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/category/`
        );
        setCat(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const StyledCard = styled(Box)(({ theme }) => ({
    /*
            This portion defines the card of each category. The display is flex which will adjust and take up the whole space.
            The contents are always centered, the bg image does not repeat, the bg image is always center, the bg size is cover,
            and the height is 400px at medium screen and 200px at small. The radius of each is 100%, the overflow is hidden,
            and the width is 100px.
        */
    display: "flex",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    overflow: "hidden",
    width: "100px",
    cursor: "pointer",
    //Theme.breakpoints just means that anythin above md screens, height is 100, otherwise 100.
    [theme.breakpoints.up("md")]: {
      height: 100,
    },
    [theme.breakpoints.down("md")]: {
      height: 100,
    },
    "&:hover": {
      /*
            This code is dedicated when you hover at the images.
            */
      opacity: 0.8,
      boxSizing: "borderBox",
      zIndex: 1,
      transition: `all 0.45s ease`,
    },
  }));

  const StyledTypography = styled(Typography)({
    /*
            This portion defines the title card of each category. We have center text align, the font color is #EEED09, the
            background color of the box is black, while the font size is 20px.
        */
    textAlign: "center",
    color: "black",
    fontSize: 20,
  });

  const CardBox = styled(Box)({
    /*
            This is the portion of the code that defines the box of each of the category.
        */
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  });

  return (
    <Stack
      Container
      direction={"row"}
      justifyContent="center"
      alignItems={"center"}
      mt={4}
      spacing={4}
      ml={3}
      sx={{ maxWidth: "100%", overflow: "auto" }}
      /*
            This stack container has a row direction, margin top of 4, spacing of 4, and margin
            left of 3. sx is also set to auto hidden so a bar will show up in case the
            categories become too much for a webpage to handle in one row or it becomes small
            screen. Before the container tag, we have justified the items in the stack
            to be space-between so everything will covered. Center justify or other justify
            methods won't work because the scrollbar will not work properly.
        */
    >
      {cat.map((category) => (
        <Link href={`category/${category.id}`} sx={{ textDecoration: "none" }}>
          <CardBox>
            <StyledCard
              sx={{
                backgroundImage: `url(${category.image})`,
                border: 1,
                borderColor: "#2f4709",
                borderWidth: "5px",
              }}
            />
            <StyledTypography>{category.name}</StyledTypography>
          </CardBox>
        </Link>
      ))}
    </Stack>
  );
};

export default Suggestions;
