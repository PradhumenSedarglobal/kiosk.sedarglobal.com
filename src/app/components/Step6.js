import React, { useEffect, useRef, useState } from "react";
import { DM_Serif_Text } from "next/font/google";
import { Noto_Sans } from "next/font/google";

import Avatar from "@mui/joy/Avatar";
import FormLabel from "@mui/joy/FormLabel";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  FormControlLabel,
  FormHelperText,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

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
} from "../../theme/typography";
import MainHeading from "./MainHeading";
import { Sheet } from "@mui/joy";

const dmserif = DM_Serif_Text({ weight: "400", subsets: ["latin"] });

const notoSense = Noto_Sans({ weight: "400", subsets: ["latin"] });

const Step6 = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const selectCategoryRef = useRef();
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const handleChange = (index) => {
    setSelectedCategory(index);
  };

  return (
    <>
      {/* Middle Content */}

      <Box
        sx={{
          userSelect: "none",
          paddingBottom: "1.5rem",
        }}
      >
        <MainHeading sx={{ mb: 2 }} title="Control Option" />

        <Box
          sx={{
            height: { lg: "calc(100vh - 240px)", overflow: "auto" },
          }}
        >
          <RadioGroup
            defaultValue="No Track(Fabric Only)"
            name="controlled-radio-buttons-group"
            onChange={handleChange}
            sx={{ my: 1, mx:3, display: "flex", flexDirection: "row", pb:15 }}
          >
            {/* First row with two radio buttons */}
            <Grid container spacing={2} >
              <Grid item xs={6}>
                <FormControlLabel
                  value="Corded Track"
                  control={<Radio />}
                  label="Corded Track"
                  sx={{
                    '& .MuiFormControlLabel-label': {
                      marginLeft: '10px', 
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6} >
                <FormControlLabel
                  value="Cordless Track"
                  control={<Radio />}
                  label="Cordless Track"
                  sx={{
                    '& .MuiFormControlLabel-label': {
                      marginLeft: '10px', 
                    },
                  }}
                />
              </Grid>
            </Grid>

            {/* Second row with two radio buttons */}
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControlLabel
                  value="Motorized Track"
                  control={<Radio />}
                  label="Motorized Track"
                  sx={{
                    '& .MuiFormControlLabel-label': {
                      marginLeft: '10px', 
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel
                  value="No Track(Fabric Only)"
                  control={<Radio />}
                  label="No Track(Fabric Only)"
                  sx={{
                    '& .MuiFormControlLabel-label': {
                      marginLeft: '10px', 
                    },
                  }}
                />
              </Grid>
            </Grid>
          </RadioGroup>

          {/* <Grid
            container
            spacing={2}
            sx={{
              alignItems: {xs:"center",sm:"center",md:"start",lg:"start",xl:"start"},
              justifyContent: {xs:"center",sm:"center",md:"start",lg:"start",xl:"start"},
              px: 2,
              pb: {sm:20,xs:20,md:5,lg:5}
            }}
          >
            <Grid xs={6} sm={6} md={4} item key="1">
              <Card
                ref={selectCategoryRef}
                onClick={() => handleChange(1)}
                sx={{
                  // width: isSmallScreen ? "100" :"200px",
                  // height: isSmallScreen ? "100": "200px",
                  marginTop: "5px",
                  marginLeft: "2px",
                  boxShadow:
                    selectedCategory === 1
                      ? "0 0 0 3px #ef9c00"
                      : "0 0 0 2px #ededec",
                  // border: "3px solid #ef9c00",
                  borderRadius: "10px",
                  "&:hover": {
                    boxShadow:
                      selectedCategory === 1
                        ? "0 0 0 3px #ef9c00"
                        : "0 0 0 2px #56504b",
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box>
                    <img
                      height={isSmallScreen ? 135 : 150}
                      weight={isSmallScreen ? 135 : 150}
                      src="https://api.sedarglobal.com/uploads/100001/product/steps/1636635150_2c0fea5194021c203e9e.png?imwidth=1920"
                      alt=""
                    />
                  </Box>

                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      paddingTop: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: notoSense.style.fontFamily,
                        fontWeight: 800,
                        color: "#686058",
                        textAlign: "center",
                        fontSize: "small",
                        textWrap: "nowrap",
                      }}
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      Manual
                    </Typography>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>

            <Grid xs={6} sm={6} md={4} item key="2">
              <Card
                ref={selectCategoryRef}
                onClick={() => handleChange(2)}
                sx={{
                  // width: isSmallScreen ? "100" :"200px",
                  // height: isSmallScreen ? "100": "200px",
                  marginTop: "5px",
                  marginLeft: "2px",
                  boxShadow:
                    selectedCategory === 2
                      ? "0 0 0 3px #ef9c00"
                      : "0 0 0 2px #ededec",
                  // border: "2px solid rgb(235, 234, 234)",
                  borderRadius: "10px",
                  "&:hover": {
                    boxShadow:
                      selectedCategory === 2
                        ? "0 0 0 3px #ef9c00"
                        : "0 0 0 2px #56504b",
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box>
                    <img
                      height={isSmallScreen ? 135 : 150}
                      weight={isSmallScreen ? 135 : 150}
                      src="https://api.sedarglobal.com/uploads/100001/product/steps/1636635098_33bcb2a7bf7402fb1cb8.png?imwidth=1920"
                      alt=""
                    />
                  </Box>

                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      paddingTop: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: notoSense.style.fontFamily,
                        fontWeight: 800,
                        color: "#686058",
                        textAlign: "center",
                        fontSize: "small",
                        textWrap: "nowrap",
                      }}
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      Motorized
                    </Typography>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          </Grid> */}
        </Box>
      </Box>
    </>
  );
};

export default Step6;
