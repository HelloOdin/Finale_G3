import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Link,
    Typography,
  } from "@mui/material";
  
  const PostsCard = ({ myDirection, title, excerpt, blogHref, image }) => {
    return (
      <Box mt={3}>
        <Link href={blogHref} sx={{ textDecoration: "none" }}>
          <Card>
            <Box
              sx={{
                display: {
                  xs: "block",
                  sm: `${myDirection}`,
                  md: `${myDirection}`,
                },
                flexDirection: "row",
              }}
            >
              <CardMedia
                component={"img"}
                height="300px"
                image={image}
                alt="Photo of Tocino"
                sx={{
                  width: "400px",
                  cursor: "pointer",
                  "&:hover": {
                    opacity: 0.8,
                    boxSizing: "border-box",
                    zIndex: 1,
                    transition: `all 0.50s ease`,
                  },
                }}
              />
              <CardContent sx={{ minHeight: "260px" }} style={{ background: "#f9f1e8" }}>
                <Typography gutterBottom variant="h5" align="center" color={"#637c30"} fontWeight={"BOLD"}>
                  {title}
                </Typography>
                <Typography variant="h6" color="#6D833B">
                  {excerpt}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Link>
      </Box>
    );
  };
  
  export default PostsCard;
//Color: #568203; Alt: Photo of Tocino