"use client";
import React, { useEffect, useRef, useState } from "react";
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
import HomeIcon from "@mui/icons-material/Home";

import { NextResponse } from "next/server";
import { useDispatch, useSelector } from "react-redux";
import ProductThumbSwiper from "@/modules/productThumbSwiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

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
import { Router } from "next/router";
import ThreeDImageViewer from "@/app/components/ThreeDImageViewer";
import {
  decrementStep,
  incrementStep,
  manualStep,
} from "@/app/lib/redux/slices/stepSlice";
import { showScanner } from "@/app/lib/redux/slices/scannerSlice";
import SceneCanvas3D from "@/app/components/SceneCanvas3D";

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

const Home = () => {
  const [success2, setSuccess2] = useState(false);
  const [scanModal, setScanModal] = useState(false);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [lastPage, setLastPage] = useState();
  const [formClose, setFormClose] = useState(false);
  const [data, setData] = useState({});
  const [material, setMaterialData] = useState({});
  const [stepTF, setStepTF] = useState(true);
  const [show3d, setShow3d] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const stepCount = useSelector((state) => state.step.value);
  const scanner = useSelector((state) => state.scanner.value);
  const dispatch = useDispatch();

  const isSmallScreen = useMediaQuery('(man-width: 376px)');



  const fetchData = async () => {
    await fetch(
      "https://uatapi.sedarglobal.com/kiosk/get_steps?category=curtains-and-drapes&sys_id=0&visitorId=0"
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res, "res");
        setData(res.result[0]);
        setMaterialData(
          res.result?.[1]?.[2]?.["CHILD_STEP"]?.[1]?.["SUB_CHILD"]?.[0]
        );
        setStepTF(false);
        // setStepsData(response.result['COMPONENT'][0]['PARENT']);
      });
  };

  useEffect(() => {
    if (stepTF) {
      fetchData();
    }
  }, [stepTF]);
  console.log("scanner", scanner);

  const handleChange = (index) => {
    setSelectedCategory(index);
  };

  const handleHome = () => {
    console.log("ddd");
    dispatch(showScanner(true));
  };

  useEffect(() => {
    console.log("modal open");
  }, [scanModal]);

  useEffect(() => {
    dispatch(showScanner(true));
  }, []);

  const nextStep = () => {
    console.log(stepCount, "dddd");

    if (stepCount < 5) {
      dispatch(incrementStep(stepCount));
    } else {
      setFormClose(true);
    }
  };

  const previousStep = () => {
    setLastPage(stepCount);
    if (stepCount > 0) {
      dispatch(decrementStep(stepCount));
    }
  };

  const handleSubmit = (submited) => {
    console.log(submited, "value");
    if (submited == "close") {
      dispatch(manualStep(5));
      return false;
    }
    if (submited == true) {
      setSuccess2(true);
    }

    dispatch(manualStep(0));
  };

  // store thumbs swiper instance
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const renderStep = () => {
    switch (stepCount) {
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
        return (
          <Step4
            handleSubmit={handleSubmit}
            formClose={formClose}
            setFormClose={setFormClose}
          />
        );
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

  useEffect(() => {
    console.log("Updated scanner state:", scanner);
  }, [scanner]);

  const imageUrls = [
    "./360v.jpg",
    "./5.jpg",
    "./4.jpg",
    "./3.jpg",
    "./2.jpg",
    "./1.jpg",
  ];

 

  const [allowNextSlide, setAllowNextSlide] = useState(false);
  
  // Function to handle clicking on a thumbnail
  const handleThumbnailClick = (index) => {
    // Update the state to allow sliding when a thumbnail is clicked
    setAllowNextSlide(true);
    thumbsSwiper.slideTo(index);  // Move the main swiper to the clicked index
  };

   // Function to handle the 3D scene (this logic might depend on your setup)
   const handle3d = (index) => {
    setAllowNextSlide(false);  // Disable next slide when the 3D scene is active
  };





  return (
    //isSmallScreen  ? "100vh" :
    <>
      {/* <ProductThumbSwiper
      data={["http://localhost:3000/360.png", "http://localhost:3000/5.jpg", "http://localhost:3000/4.jpg", "http://localhost:3000/3.jpg", "http://localhost:3000/2.jpg"]}
      url={''}
      defaultSelectItem={0}
    /> */}

      {scanner && <ScanModal />}

      <Grid
        container
        sx={{
          height: {
            maxWidth: "1920px",
            margin: "auto",
            lg: "none",
            md: "100vh",
            sm: "100vh",
          },
        }}
      >
        {/* Image Container */}
        <Grid
          item
          xs={12}
          md={7}
          sx={{
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

          <>
          <main>
      {/* Main Swiper -> pass thumbs swiper instance */}
      <Swiper
        className="previewImage"
        modules={[Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={10}
        slidesPerView={1}
        allowTouchMove={false}
        loop={false}
        initialSlide={1}
        allowSlideNext={allowNextSlide}  
      >
        {imageUrls.map((src, index) => (
          <SwiperSlide key={index}>
            {index === 0 ? (
              <SceneCanvas3D
                langName="en"
                actions=""
                productInfo=""
                headerData=""
                material={material}
                {...data}
              />
            ) : (
              <img
                src={src}
                className="swiper-image"
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
                alt={`Image ${index + 1}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbs Swiper -> store swiper instance */}
      <Swiper
        modules={[Thumbs]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={6}
        loop={true}
        allowSlideNext={true}  
        slideToClickedSlide
        style={{
          marginLeft: "3px",
        }}
        breakpoints={{
          320: { slidesPerView: 3, spaceBetween: 5 },
          480: { slidesPerView: 4, spaceBetween: 10 },
          768: { slidesPerView: 5, spaceBetween: 10 },
          1024: { slidesPerView: 6, spaceBetween: 15 },
        }}
      >
        {imageUrls.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              height={90}
              width={100}
              style={{
                border: index === 0
                  ? '2px solid orange'
                  : activeIndex === index
                  ? '2px solid #010101'
                  : '', // Add a border if it's active
                marginTop: '1px',
              }}
              onClick={() => {
                handleThumbnailClick(index);
              }}
              alt={`Thumbnail ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>

          </>

          {/* <ThreeDImageViewer imageSrc="https://api.sedarglobal.com/uploads/100001/scene/1637144847_79f8a2b53836e773a8df.jpg" /> */}

          {/* <Carousel selectedItem={1} >
            <div>
              <img src="./360.png" />
            </div>

            <div>
              <img  src="./5.jpg" />
            </div>

            <div>
              <img src="./2.jpg" />
            </div>

            <div>
              <img src="./3.jpg" />
            </div>

            <div>
              <img src="./4.jpg" />
            </div>

            <div>
              <img src="./1.jpg" />
            </div>
          </Carousel> */}
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
          <Box sx={{ width: "100%" }}>
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
                overflow: "hidden",
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
                  {stepCount !== 5 && (
                    <>
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
                        ALNK600-24 - Light Blue
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
                        Ripple Fold Curtains
                      </Typography>
                    </>
                  )}
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
                    Price : AED 782
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
                  {stepCount > 0 && (
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

                  {stepCount == 0 && (
                    <Button
                      sx={{
                        display: "flex",
                        backgroundColor: "#ef9c00",
                        color: "#f5ece0",
                        fontFamily: Helvetica_Neue_Regular.style.fontFamily,
                        justifyContent: "flex-start",
                        alignItems: "start",
                      }}
                      onClick={() => handleHome()}
                      size="large"
                      variant="contained"
                      startIcon={<HomeIcon />}
                    >
                      Home
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
                  {stepCount < 5 && (
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

                  {stepCount === 5 && (
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
