import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import MainHeading from "@/app/components/MainHeading";
import { Grid } from "@mui/joy";
import ImageCard from "@/app/components/ImageCard";
import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import LocalMallIcon from "@mui/icons-material/LocalMall";


import typography, {
    Helvetica_Neue,
    Helvetica_Neue_Regular,
    Helvetica_Neue_Thin,
    Helvetica_Neue_Light,
    Helvetica_Neue_Medium,
    Helvetica_Neue_Bold,
    Helvetica_Neue_Light_Arabic,
    Helvetica_Neue_Bold_Arabic,
    Helvetica_Neue_Regular_Arabic,
    Helvetica_Neue_Thin_Arabic,
    Helvetica_Neue_Medium_Arabic,
    Helvetica_Neue_Arabic,
    porter_bold_3,
  } from "../../theme/typography";
  



function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(50)).map(
    () => messageExamples[getRandomInt(messageExamples.length)]
  );
}

export default function page() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);


 
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const selectCategoryRef = React.useRef();
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const step = 1;

  const MediumScreen = useMediaQuery("(max-width: 768px)");


  const handleChange = (index) => {

    setSelectedCategory(index);
  };


  const nextStep = () => {
    if (step < 6) {
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };



  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <List>
        <MainHeading title="Select Category" />

        <Grid
          container
          spacing={2}
          sx={{
            overflow: "auto",
            alignItems: "center",
            justifyContent: "center",
            px: 2,
            pb: 5,
          }}
        >
          <ImageCard
            category={selectedCategory}
            refName={selectCategoryRef}
            index={1}
            functionname={handleChange}
            img="https://thumbs.dreamstime.com/b/blinds-icon-vector-set-white-background-eps-blinds-icon-isolated-white-background-332314075.jpg"
          />

          <ImageCard
            category={selectedCategory}
            refName={selectCategoryRef}
            index={2}
            functionname={handleChange}
            img="https://thumbs.dreamstime.com/b/blinds-icon-vector-set-white-background-eps-blinds-icon-isolated-white-background-332314075.jpg"
          />

          <ImageCard
            category={selectedCategory}
            refName={selectCategoryRef}
            index={3}
            functionname={handleChange}
            img="https://thumbs.dreamstime.com/b/blinds-icon-vector-set-white-background-eps-blinds-icon-isolated-white-background-332314075.jpg"
          />

          <ImageCard
            category={selectedCategory}
            refName={selectCategoryRef}
            index={4}
            functionname={handleChange}
            img="https://thumbs.dreamstime.com/b/blinds-icon-vector-set-white-background-eps-blinds-icon-isolated-white-background-332314075.jpg"
          />
        </Grid>
      </List>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <Grid
                container
                spacing={2} // Adds space between child Grid items
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  backgroundColor: "white",
                  boxShadow: "0 7px 11px -3px rgba(0, 0, 0, 0)",
                  // paddingBottom: "10px",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <Grid>
                  <Typography
                    sx={{
                      fontFamily: Helvetica_Neue_Regular.style.fontFamily,
                      color: "#010101",
                      paddingTop: "25px",
                      textAlign: "center",
                      fontSize: "small",
                      textWrap: "nowrap",
                      paddingLeft: "20px",
                      textAlign: "start",
                    }}
                    gutterBottom
                    variant="h6"
                    component="div"
                  >
                    YJD500-07 - Brown
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: Helvetica_Neue_Bold.style.fontFamily,
                      color: "#010101",
                      textAlign: "center",
                      fontSize: "medium",
                      textWrap: "nowrap",
                      paddingLeft: "20px",
                      textAlign: "start",
                    }}
                    gutterBottom
                    variant="h6"
                    component="div"
                  >
                    Pinch Pleat Curtains
                  </Typography>
                </Grid>

                <Grid>
                  <Typography
                    sx={{
                      fontFamily: Helvetica_Neue_Bold.style.fontFamily,
                      color: "#010101",
                      paddingTop: "25px",
                      textAlign: "center",
                      fontSize: "medium",
                      textWrap: "nowrap",
                      paddingLeft: "20px",
                    }}
                    gutterBottom
                    variant="h6"
                    component="div"
                  >
                    Price : AED 400
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                container
                spacing={2} // Adds space between child Grid items
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  paddingBottom: "10px",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "start",
                  }} // Center-align content
                >
                  {step > 0 && (
                    <Button
                      sx={{
                        display: "flex",
                        backgroundColor: "#ef9c00",
                        color: "#f5ece0",
                        fontFamily: Helvetica_Neue_Regular.style.fontFamily,
                        justifyContent: "flex-start",
                        alignItems: "start",
                      }}
                      onClick={previousStep}
                      size="large"
                      variant="contained"
                      startIcon={<ArrowCircleLeftIcon />}
                    >
                      Back
                    </Button>
                  )}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "end",
                  }} // Right-align CancelIcon
                >
                  {step < 5 && (
                    <Button
                      sx={{
                        display: "flex",
                        backgroundColor: "#ef9c00",
                        color: "#f5ece0",
                        fontFamily: Helvetica_Neue_Regular.style.fontFamily,
                        fontWeight: "700",
                        justifyContent: "flex-end",
                        alignItems: "end",
                      }}
                      onClick={nextStep}
                      size="large"
                      variant="contained"
                      endIcon={<ArrowCircleRightIcon />}
                    >
                      Continue
                    </Button>
                  )}

                  {step == 5 && (
                    <Button
                      sx={{
                        display: "flex",
                        backgroundColor: "#ef9c00",
                        color: "#f5ece0",
                        fontFamily: Helvetica_Neue_Regular.style.fontFamily,
                        fontWeight: "700",
                        justifyContent: "flex-end",
                        alignItems: "end",
                      }}
                      onClick={nextStep}
                      size="large"
                      variant="contained"
                      endIcon={<LocalMallIcon />}
                    >
                      Add To Cart
                    </Button>
                  )}
                </Grid>
              </Grid>
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

const messageExamples = [
  {
    primary: "Brunch this week?",
    secondary:
      "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: "/static/images/avatar/5.jpg",
  },
  {
    primary: "Birthday Gift",
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: "/static/images/avatar/1.jpg",
  },
  {
    primary: "Recipe to try",
    secondary:
      "I am try out this new BBQ recipe, I think this might be amazing",
    person: "/static/images/avatar/2.jpg",
  },
  {
    primary: "Yes!",
    secondary: "I have the tickets to the ReactConf for this year.",
    person: "/static/images/avatar/3.jpg",
  },
  {
    primary: "Doctor's Appointment",
    secondary:
      "My appointment for the doctor was rescheduled for next Saturday.",
    person: "/static/images/avatar/4.jpg",
  },
  {
    primary: "Discussion",
    secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
    person: "/static/images/avatar/5.jpg",
  },
  {
    primary: "Summer BBQ",
    secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
    person: "/static/images/avatar/1.jpg",
  },
];
