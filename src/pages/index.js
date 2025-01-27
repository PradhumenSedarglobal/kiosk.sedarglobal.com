import React, { useEffect, useRef, useState } from "react";
import "../app/custom.css";
import Grid from "@mui/material/Grid";

import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { DM_Serif_Text } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import Slider from "@mui/material/Slider";
import MenuIcon from "@mui/icons-material/Menu";
import Fab from "@mui/material/Fab";
import CloseIcon from "@mui/icons-material/Close";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Drawer from "@mui/material/Drawer";
import { styled, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import { NextResponse } from 'next/server'


import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Inter } from "next/font/google";
import Step1 from "@/app/components/Step1";
import Step2 from "@/app/components/Step2";
import Step3 from "@/app/components/Step3";
import Step4 from "@/app/components/Step4";
import Modal from "@/app/components/Modal";
import Step6 from "@/app/components/Step6";

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
} from "../theme/typography";

import PopupModal from "@/app/components/PopupModal";
import ScanModal from "@/app/components/ScanModal";
import { ModalClose, ModalDialog, Sheet } from "@mui/joy";

const drawerWidth = 400;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

export function middleware(request) {
  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: '/about/:path*',
}


const Home = () => {
  const [success2, setSuccess2] = useState(false);
  const [scanModal, setScanModal] = useState(false);
  const [step, setStep] = useState(0);
  const selectCategoryRef = useRef();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [lastPage,setLastPage] = useState();
  

  const handleChange = (index) => {
    setSelectedCategory(index);
  };

  useEffect(() => {
    setScanModal(true);
  }, []);

  const nextStep = () => {
    console.log(step, 'dddd');
    
    if (step < 5) {
      setStep(step + 1);
    }else{
      setFormClose(true);
    }
  };

  const previousStep = () => {
    setLastPage(step);
    if (step > 0) {
      setStep(step - 1);
    }
  };

  

  const handleSubmit = (submited) => {
    console.log(submited, "value");
    if(submited == 'close'){
      setStep(5); 
      return false;
    }
    if (submited == true) {
      setSuccess2(true);
    } 

    setStep(0); 
  };

 
  const [formClose,setFormClose] = useState(false);

 

  const renderStep = () => {
    switch (step) {
      case 0:
        return <Step1 successValue={success2} stepcount={lastPage} />;
      case 1:
        return <Modal />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step6 />;
      case 5:
        return <Step4 step={step} 
          handleSubmit={handleSubmit} 
          formClose={formClose} 
          setFormClose={setFormClose}
          setStep={setStep}
          />;
      default:
        return null;
    }
  };

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    //isSmallScreen  ? "100vh" :
    <>
   
  
      {scanModal && <ScanModal />}

      <Grid container sx={{ height: { maxWidth:"1920px",margin:"auto", lg: "none", md: "100vh", sm: "100vh" } }}>
        {/* Image Container */}
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            // height: isSmallScreen ? "55vh" : "100vh",
            // backgroundImage: `url('https://images.unsplash.com/photo-1598519575657-5f8d16c3a20f?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            margin: 0,
          }}
        >
          <Fab
            onClick={handleDrawerOpen}
            sx={{
              backgroundColor: "#ef9c00",
              color: "#f5ece0",
              fontFamily: Helvetica_Neue_Regular.style.fontFamily,
              fontWeight: "700",
              padding: "8px 16px",
              position: "absolute",
              zIndex: 999,
              marginLeft: "5px",
              top: "10px",
            }}
            color="warning"
            aria-label="edit"
          >
            <MenuIcon />
          </Fab>

          <Carousel selectedItem={1}>
            <div>
              <img src="./360.png" />
            </div>

            <div>
              <img src="https://images.unsplash.com/photo-1542799706-c8bc889c7ffd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>

            <div>
              <img src="https://plus.unsplash.com/premium_photo-1679060384160-0ac5ff75a9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>

            <div>
              <img src="https://images.unsplash.com/photo-1444201983204-c43cbd584d93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
          </Carousel>
        </Grid>

        {/* Input Container */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            
          }}
        >
          <Box sx={{  width: "100%" }}>
            <Drawer
              sx={{
                width: { md: drawerWidth, sm: "100%", xs: "100%" },
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: { md: drawerWidth, sm: "100%", xs: "100%" },
                  boxSizing: "border-box",
                },
              }}
              variant="persistent"
              anchor="left"
              open={open}
            >
              <DrawerHeader>
                <Grid
                  container
                  sx={{ alignItems: "center" }}
                  justifyContent="space-between"
                >
                  <Typography
                    sx={{
                      color: "rgb(239, 156, 0)",
                      fontFamily: Helvetica_Neue_Bold.style.fontFamily,
                      fontWeight: "600",
                    }}
                    variant="h6"
                    noWrap
                    component="div"
                  >
                    Added to Your Cart!
                  </Typography>
                  <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "ltr" ? (
                      <CloseIcon />
                    ) : (
                      <ChevronRightIcon />
                    )}
                  </IconButton>
                </Grid>
              </DrawerHeader>
              <Divider />
              <List>
                <Grid
                  container
                  sx={{ padding: "10px" }}
                  justifyContent="space-between"
                >
                  <Grid item xs={4} sm={3} md={3}>
                    <img
                      height={100}
                      width={100}
                      src="https://api.sedarglobal.com/uploads/100001/item/laptop/1708146524_d97c7cc07e26fd5ba93d.webp?imwidth=1920"
                      alt="Product"
                    />
                  </Grid>
                  <Grid sx={{ paddingLeft: "20px" }} item xs={8} sm={9} md={9}>
                    <Typography
                      sx={{
                        fontFamily: Helvetica_Neue_Medium.style.fontFamily,
                        fontWeight: "500",
                        letterSpacing: "0.00938em",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      variant="body2"
                      noWrap
                      component="div"
                    >
                      Item Code : HNTB10-13
                    </Typography>
                    <Typography
                      noWrap
                      sx={{
                        wordBreak: "break-all",
                        fontFamily: Helvetica_Neue_Medium.style.fontFamily,
                        fontWeight: "700",
                        fontSize: "1rem", // Medium size
                        letterSpacing: "0.00938em",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      variant="h6"
                      component="div"
                    >
                      Blackout Curtain - Pinch Pleat
                    </Typography>
                    <Box sx={{ display: "flex", marginTop: "8px" }}>
                      <Typography
                        sx={{
                          fontFamily: Helvetica_Neue_Medium.style.fontFamily,
                          fontWeight: "500",
                        }}
                        variant="body2"
                        component="div"
                      >
                        QTY:
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: Helvetica_Neue_Thin.style.fontFamily,
                          fontWeight: "700",
                          marginLeft: "5px",
                        }}
                        variant="body2"
                        component="div"
                      >
                        1
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", marginTop: "8px" }}>
                      <Typography
                        sx={{
                          fontFamily: Helvetica_Neue_Medium.style.fontFamily,
                          fontWeight: "500",
                          letterSpacing: "0.00938em",
                        }}
                        variant="body2"
                        component="div"
                      >
                        Value:
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: Helvetica_Neue_Thin.style.fontFamily,
                          fontWeight: "700",
                          letterSpacing: "0.00938em",
                          marginLeft: "5px",
                        }}
                        variant="body2"
                        component="div"
                      >
                        AED 326
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Divider />
                <Grid
                  container
                  sx={{ padding: "10px" }}
                  justifyContent="space-between"
                >
                  <Grid item xs={4} sm={3} md={3}>
                    <img
                      height={100}
                      width={100}
                      src="https://api.sedarglobal.com/uploads/100001/item/laptop/1708146524_d97c7cc07e26fd5ba93d.webp?imwidth=1920"
                      alt="Product"
                    />
                  </Grid>
                  <Grid sx={{ paddingLeft: "20px" }} item xs={8} sm={9} md={9}>
                    <Typography
                      sx={{
                        fontFamily: Helvetica_Neue_Medium.style.fontFamily,
                        fontWeight: "500",
                        letterSpacing: "0.00938em",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      variant="body2"
                      noWrap
                      component="div"
                    >
                      Item Code : HNTB10-13
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: Helvetica_Neue_Medium.style.fontFamily,
                        fontWeight: "700",
                        fontSize: "1rem", // Medium size
                        letterSpacing: "0.00938em",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      variant="h6"
                      component="div"
                    >
                      Blackout Curtain - Pinch Pleat
                    </Typography>
                    <Box sx={{ display: "flex", marginTop: "8px" }}>
                      <Typography
                        sx={{
                          fontFamily: Helvetica_Neue_Medium.style.fontFamily,
                          fontWeight: "500",
                        }}
                        variant="body2"
                        component="div"
                      >
                        QTY:
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: Helvetica_Neue_Thin.style.fontFamily,
                          fontWeight: "700",
                          marginLeft: "5px",
                        }}
                        variant="body2"
                        component="div"
                      >
                        1
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", marginTop: "8px" }}>
                      <Typography
                        sx={{
                          fontFamily: Helvetica_Neue_Medium.style.fontFamily,
                          fontWeight: "500",
                          letterSpacing: "0.00938em",
                        }}
                        variant="body2"
                        component="div"
                      >
                        Value:
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: Helvetica_Neue_Thin.style.fontFamily,
                          fontWeight: "700",
                          letterSpacing: "0.00938em",
                          marginLeft: "5px",
                        }}
                        variant="body2"
                        component="div"
                      >
                        AED 326
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </List>
            </Drawer>

            

            {renderStep()}

            {/* Bottom Bar */}
            <Box
              sx={{
                width: "100%",
                backgroundColor: "#fff",
                position: {
                  lg: "unset",
                  xl: "unset",
                  xs: "fixed",
                  md: "fixed",
                  sm: "fixed",
                },
                bottom: { xs: 0, md: 0, sm: 0 }, // Stick to the bottom on small screens
                left: 0, // Ensure it stays on the left side
                zIndex: 1000, // Bring it on top of other elements
                boxShadow: "0 -3px 11px -3px rgba(0, 0, 0, 0.1)", // Optional: Adds shadow for better visual separation
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
                  paddingRight: "10px",
                  paddingLeft: "10px",
                }}
              >
                <Grid item xs={7} pt={"0 !important"}>
                  <Typography
                    sx={{
                      fontFamily: Helvetica_Neue_Regular.style.fontFamily,
                      color: "#010101",
                      paddingTop: "25px",
                      textAlign: "start",
                      fontSize: "small",
                      // paddingLeft: "20px",
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
                      textAlign: "start",
                      fontSize: "medium",
                      // paddingLeft: "20px",
                    }}
                    gutterBottom
                    variant="h6"
                    component="div"
                  >
                    Pinch Pleat Curtains
                  </Typography>
                </Grid>

                <Grid item xs={5} pt={"0 !important"}>
                  <Typography
                    sx={{
                      fontFamily: Helvetica_Neue_Bold.style.fontFamily,
                      color: "#010101",
                      paddingTop: "25px",
                      textAlign: "end",
                      fontSize: "medium",
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
                  paddingRight: "10px",
                  paddingLeft: "10px",
                  paddingBottom: "10px",
                }}
              >
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "start",
                  }}
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
                  }}
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

                  {step === 5 && (
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
                      onClick={() => nextStep()}
                      size="large"
                      variant="contained"
                      endIcon={<LocalMallIcon />}
                    >
                      Add To Cart
                    </Button>
                  )}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
