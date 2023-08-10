//This javascript is for the four featured meals at the homepage.

import { Box, Container, Grid, Typography, styled } from "@mui/material";
import fillet from "../../static/zfillet.jpg";
import bacsilog from "../../static/bacsilog.jpg";
import okinawa from "../../static/okinawa.jpg";
import Category from "../categoryList/Category";

const Hero = () => {
  const StyledCard = styled(Box)(({ theme }) => ({
    /*
            This portion defines the card of each photo. The display is flex which will adjust and take up the whole space.
            The contents are always centered, the bg image does not repeat, the bg image is always center, the bg size is cover,
            and the height is 400px at medium screen and 200px at small.
        */
    display: "flex",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: 50,
    cursor: "pointer",
    //Theme.breakpoints just means that anythin above md screens, height is 400, otherwise 200.
    [theme.breakpoints.up("md")]: {
      height: 400,
    },
    [theme.breakpoints.down("md")]: {
      height: 200,
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
            This portion defines the title card of each featured food. We have center text align, the font color is #EEED09, the
            background color of the box is black, while the font size is 20px.
        */
    textAlign: "center",
    color: "#f4c947",
    background: "#8bac61",
    fontSize: 20,
  });

  const StyledWrapper = styled(Box)(({ theme }) => ({
    /*
            This is used in order to wrap the text and make it so that it does not cover the whole background image. This was styled
            as a separate box. The width is 80%. The top padding is placed in themes to make it responsive. When the screen is
            medium above, the top padding is 140%, otherwise it is 40%.
        */
    [theme.breakpoints.up("md")]: {
      paddingTop: "140%",
    },
    [theme.breakpoints.down("md")]: {
      paddingTop: "40%",
    },
    width: "80%",
  }));

  return (
    <Container style={{ background: "#f9f1e8" }}>
      <Grid
        container
        direction={"row"}
        columnSpacing={2}
        rowSpacing={2}
        marginTop={2}
        justifyContent={"center"}
        //this container is in a row, with col&row spacing = 2 pts.
      >
        <Grid
          item
          md={3}
          xs={6}
          //in medium screens, give this item 3 columns; in small screens, give it 6 columns
        >
          <StyledCard
            sx={{
              backgroundImage: `url(${fillet})`,
              border: 1,
              borderColor: "#c2cfa5",
              borderWidth: "5px",
            }}
            //styledcard contains the background image of turon.jpg
          >
            <StyledWrapper>
              <StyledTypography>Chicken Fillet</StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${bacsilog})`, border: 1,
              borderColor: "#c2cfa5",
              borderWidth: "5px", }}>
            <StyledWrapper>
              <StyledTypography>Bacsilog</StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${okinawa})`, border: 1,
              borderColor: "#c2cfa5",
              borderWidth: "5px", }}>
            <StyledWrapper>
              <StyledTypography>Okinawa Milk Tea</StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
      </Grid>
      <Category />
    </Container>
  );
};

export default Hero;
