import React, { useEffect, useRef, useState } from "react";
import Grid from "@mui/material/Grid";
import { DM_Serif_Text } from "next/font/google";

import { Noto_Sans } from "next/font/google";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";

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
import MainHeading from "./MainHeading";
import ImageCard from "./ImageCard";

const dmserif = DM_Serif_Text({ weight: "400", subsets: ["latin"] });

const notoSense = Noto_Sans({ weight: "400", subsets: ["latin"] });

const Modal = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const selectCategoryRef = useRef();

  const handleChange = (index) => {
    setSelectedCategory(index);
  };

  const handleChangeSelect = (event) => {
    setSelectedOption(event.target.value);
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
        <MainHeading sx={{ mb: 2 }} title="Modal Selection" />

        <Box
          className="bigipads"
          sx={{
            height: { lg: "calc(100vh - 240px)", overflow: "auto" },
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              alignItems: {xs:"center",sm:"center",md:"start",lg:"start",xl:"start"},
              justifyContent: {xs:"center",sm:"center",md:"start",lg:"start",xl:"start"},
              px: 2,
              pb: {sm:20,xs:20,md:5,lg:5}
            }}
          >
             <ImageCard
              category={selectedCategory}
              refName={selectCategoryRef}
              index={1}
              selected={true}
              name="Ripple Fold"
              functionname={handleChange}
              img="https://api.sedarglobal.com/uploads/100001/lifestyle/1697618134_6e6fb48c2201f95bc514.webp?imwidth=1920"
              
            />

          <ImageCard
              category={selectedCategory}
              refName={selectCategoryRef}
              index={2}
              name="Pinch Pleat Curtain"
              functionname={handleChange}
              img="https://api.sedarglobal.com/uploads/100001/lifestyle/1707808691_60e89e939d376706dabd.webp?imwidth=200"
            />

            <ImageCard
              category={selectedCategory}
              refName={selectCategoryRef}
              index={3}
              name="Fabric Curtain - Eyelet"
              functionname={handleChange}
              img="https://api.sedarglobal.com/uploads/100001/lifestyle/1708000430_546345798927edf987f6.webp?imwidth=200"
            />


           

          

           
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Modal;
