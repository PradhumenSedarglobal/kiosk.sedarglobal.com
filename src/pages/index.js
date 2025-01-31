"use client";
import React, { useEffect, useRef, useState } from "react";

// Icons
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import MenuIcon from "@mui/icons-material/Menu";


// Swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";

// Material ui 
import Grid from "@mui/material/Grid";
import { styled, useTheme } from "@mui/material/styles";
import {Box,Button,Typography,useMediaQuery} from "@mui/material";
import { ModalClose, ModalDialog, Sheet } from "@mui/joy";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Fab from "@mui/material/Fab";

// Custom components
import { Step1, Step2, Step3, Step4, Step6, Modal } from "@/app/components/";
import SceneCanvas3D from "@/app/components/SceneCanvas3D";
import ScanModal from "@/app/components/ScanModal";


// Redux
import { useDispatch, useSelector } from "react-redux";
import {decrementStep,incrementStep,manualStep} from "@/app/lib/redux/slices/stepSlice";
import { showScanner } from "@/app/lib/redux/slices/scannerSlice";
import { reset } from "@/app/lib/redux/slices/threedSlice";

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
  const theme = useTheme();
  const [success2, setSuccess2] = useState(false);
  const [scanModal, setScanModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastPage, setLastPage] = useState();
  const [formClose, setFormClose] = useState(false);
  const [data, setData] = useState({});
  const [material, setMaterialData] = useState({});
  const [stepTF, setStepTF] = useState(true);
  const [show3d, setShow3d] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [allowNextSlide, setAllowNextSlide] = useState(false);

  // Redux Part Start
   const stepCount = useSelector((state) => state.step.value);
   const scanner = useSelector((state) => state.scanner.value);
   const fonts = useSelector((state)=> state.font);
 
   const dispatch = useDispatch();
  // Redux Part End


  const fetchData = async () => {
    await fetch(
      "https://uatapi.sedarglobal.com/kiosk/get_steps?category=curtains-and-drapes&sys_id=0&visitorId=0"
    )
      .then((res) => res.json())
      .then((res) => {
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
 

  const handleChange = (index) => {
    setSelectedCategory(index);
  };

  const handleHome = () => {
    dispatch(showScanner(true));
  };

  useEffect(() => {
  }, [scanModal]);

  useEffect(() => {
    dispatch(showScanner(true));
  }, []);

  const nextStep = () => {

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
    
  }, [scanner]);

  const imageUrls = [
    "./360v.jpg",
    "./5.jpg",
    "./4.jpg",
    "./3.jpg",
    "./2.jpg",
    "./1.jpg",
  ];

  const handleThumbnailClick = (index) => {
    setAllowNextSlide(true);
    thumbsSwiper.slideTo(index);
  };

  const handle3d = (index) => {
    setAllowNextSlide(false);
  };


  const handleResetThreed = () => {
      dispatch(reset(true));

      setTimeout(()=>{
        dispatch(reset(false));
      },1000);
  }

  return (
    <>
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

          {/* Burger Menu Icon Start */}
            <Fab
              onClick={handleDrawerOpen}
              sx={{
                backgroundColor: "#ef9c00",
                color: "#f5ece0",
                fontFamily: fonts.Helvetica_Neue_Regular.style.fontFamily,
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
          {/* Burger Menu End  */}

          {/* Reset 3dModal Icon Start */}
             {show3d && (
                 <Fab
                 onClick={()=>{handleResetThreed()}}
                 className="resetbutton"
                 sx={{
                   backgroundColor: "#ef9c00",
                   color: "#f5ece0",
                   fontFamily: fonts.Helvetica_Neue_Regular.style.fontFamily,
                   fontWeight: "700",
                   padding: "8px 16px",
                   position: "absolute",
                   zIndex: 999,
                   marginLeft: "5px",
                   top: "10px",
                   right: {xs:"20px",sm:"10px",lg:"570px"}
                 }}
                 color="warning"
                 aria-label="edit"
               >
                 <SettingsBackupRestoreIcon />
               </Fab>
             )}
             
            {/* Reset 3dModal Icon End  */}

         
          {/* Swiper Slider with 3d Rendor Section Start */}
            <main>
              {/* Main Swiper -> pass thumbs swiper instance */}
              <Swiper
                style={{
                  marginBottom: "5px",
                }}
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
                  320: { slidesPerView: 4, spaceBetween: 8 },
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
                      breakpoints={{
                        320: {
                          style: {
                            height: 70,
                            width: 70,
                          },
                        },
                      }}
                      style={{
                        border:
                          index === 0
                            ? "2px solid orange"
                            : activeIndex === index
                            ? "2px solid #010101"
                            : "",
                        marginTop: "1px",
                      }}
                      onClick={() => {
                        handleThumbnailClick(index),index === 0 ? setShow3d(true) : setShow3d(false);
                      }}
                      alt={`Thumbnail ${index + 1}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </main>
          {/* Swiper Slider with 3d Rendor Section End */}
         
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
            {/* Slidebar Start */}
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
                          fontFamily: fonts.Helvetica_Neue_Bold.style.fontFamily,
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
                            fontFamily: fonts.Helvetica_Neue_Medium.style.fontFamily,
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
                            fontFamily: fonts.Helvetica_Neue_Medium.style.fontFamily,
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
                              fontFamily: fonts.Helvetica_Neue_Medium.style.fontFamily,
                              fontWeight: "500",
                            }}
                            variant="body2"
                            component="div"
                          >
                            QTY:
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: fonts.Helvetica_Neue_Thin.style.fontFamily,
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
                              fontFamily: fonts.Helvetica_Neue_Medium.style.fontFamily,
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
                              fontFamily: fonts.Helvetica_Neue_Thin.style.fontFamily,
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
                            fontFamily: fonts.Helvetica_Neue_Medium.style.fontFamily,
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
                            fontFamily: fonts.Helvetica_Neue_Medium.style.fontFamily,
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
                              fontFamily: fonts.Helvetica_Neue_Medium.style.fontFamily,
                              fontWeight: "500",
                            }}
                            variant="body2"
                            component="div"
                          >
                            QTY:
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: fonts.Helvetica_Neue_Thin.style.fontFamily,
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
                              fontFamily: fonts.Helvetica_Neue_Medium.style.fontFamily,
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
                              fontFamily: fonts.Helvetica_Neue_Thin.style.fontFamily,
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
            {/* Slidebar End */}

            {/* Step Start */}

               {renderStep()}

            {/* Step End */}

            {/* Bottom Bar Start */}
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
                    bottom: { xs: 0, md: 0, sm: 0 }, 
                    left: 0, 
                    zIndex: 1000, 
                    boxShadow: "0 -3px 11px -3px rgba(0, 0, 0, 0.1)", 
                  }}
                >
                  <Grid
                    container
                    spacing={2} 
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
                              fontFamily: fonts.Helvetica_Neue_Regular.style.fontFamily,
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
                              fontFamily: fonts.Helvetica_Neue_Bold.style.fontFamily,
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
                          fontFamily: fonts.Helvetica_Neue_Bold.style.fontFamily,
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
                            fontFamily: fonts.Helvetica_Neue_Regular.style.fontFamily,
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
                            fontFamily: fonts.Helvetica_Neue_Regular.style.fontFamily,
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
                            fontFamily: fonts.Helvetica_Neue_Regular.style.fontFamily,
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
                            fontFamily: fonts.Helvetica_Neue_Regular.style.fontFamily,
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
            {/* Bottom Bar End */}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
