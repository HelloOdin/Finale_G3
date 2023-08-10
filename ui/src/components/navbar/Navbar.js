//This javascript is for the navigation bar of the homepage.
import React, { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  TextField,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import PostSearch from "../search/PostSearch";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }); //This is the navigation bar itself. Flex means that it fills its space regardless of size.

  const MenuBox = styled(Box)({
    display: "flex",
    gap: 30,
    cursor: "pointer",
  }); //This is the box where MenuItems will be located

  const MenuItems = [
    { Name: "Home", Link: "#" },
    { Name: "Recipes", Link: "#" },
    { Name: "About Us", Link: "#" },
  ]; //These are the items placed on the menu navigation bar.

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <AppBar color="default" position="sticky" elevation={6}>
        <StyledToolbar>
          <Box flex={{ xs: 25, md: 1 }}>
            <Link href="http://localhost:3000/" sx={{ textDecoration: "none" }}>
              <Typography
                variant="h4"
                color={"#2f4709"}
                fontWeight={"bold"}
                sx={{
                  fontFamily: "Righteous, cursive",
                  textAlign: { xs: "center", md: "left" },
                }}
                //This is the code dedicated to the upper right logo of the website.
              >
                CampusEats
              </Typography>
            </Link>
          </Box>

          <MenuBox flex={1} sx={{ display: { xs: "none", md: "flex" } }}>
            {MenuItems.map((item) => (
              <Typography variant="h6" color={"#f4ca4a"} fontWeight={"bold"}>
                {item.Name}
              </Typography>
            ))}
          </MenuBox>
          <Box flex={1}>
            <PostSearch />

            <MenuRoundedIcon
              sx={{ display: { xs: "flex", md: "none", cursor: "pointer" } }}
              onClick={() => setOpenMenu(!openMenu)}
              //This is the code dedicated to the search bar.
            />
          </Box>
        </StyledToolbar>
        <Drawer
          anchor={"top"}
          open={openMenu}
          onClose={() => setOpenMenu(!openMenu)}
          //This is the code for the menu items when the screen is smaller. They become a dropdown.
        >
          <List>
            <ListItem>
              {MenuItems.map((item) => (
                <ListItemButton>{item.Name}</ListItemButton>
              ))}
            </ListItem>
          </List>
          <TextField
            sx={{ display: { xs: "flex", md: "none" }, bgcolor: "#8bac61" }}
            //This is the code for the search bar when the screen is smaller.
            label="Search Here!"
            variant="outlined"
            color="success"
          />
        </Drawer>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          padding: 1,
        }}
      >
        <Typography
          align="center"
          variant="h5"
          mr={{ xs: 0, md: 1 }}
          //This is the code for the first part of the header. Btw, "mr" means margin right.
        >
          Your Ultimate Guide to Delicious and Nutritious Meals at
        </Typography>
        <Typography
          align="center"
          variant="h5"
          color={"#568203"}
          sx={{ fontFamily: "Righteous, cursive" }}
          //This is the code for the second part of the header.
        >
          DLSU Laguna!
        </Typography>
      </Box>
    </>
  );
};  

export default Navbar;
