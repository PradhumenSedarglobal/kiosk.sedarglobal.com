import React, { useEffect, useRef, useState } from "react";
import "../../app/custom.css";
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
          sx={{
            height: { lg: "calc(100vh - 280px)", overflow: "auto" },
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              alignItems: {xs:"center",sm:"center",md:"start",lg:"start",xl:"start"},
              justifyContent: {xs:"center",sm:"center",md:"start",lg:"start",xl:"start"},
              px: 2,
              pb: {sm:20,xs:20},
            }}
          >
            <ImageCard
              category={selectedCategory}
              refName={selectCategoryRef}
              index={1}
              name="Blackout Curtain - Pinch Pleat - Brown"
              functionname={handleChange}
              img="https://api.sedarglobal.com/uploads/100001/lifestyle/1707916579_d12d254ecbb41e75631d.webp?imwidth=1920"
            />

            <ImageCard
              category={selectedCategory}
              refName={selectCategoryRef}
              index={2}
              name="Fabric Curtain - Pinch Pleat - Khaki"
              functionname={handleChange}
              img="https://api.sedarglobal.com/uploads/100001/lifestyle/1708149009_7cd4a25064aeec473ac8.webp?imwidth=1920"
            />

            <ImageCard
              category={selectedCategory}
              refName={selectCategoryRef}
              index={3}
              name="Blackout Curtain - Pinch Pleat - Red"
              functionname={handleChange}
              img="https://api.sedarglobal.com/uploads/100001/lifestyle/1708154756_bef8bfc7647a08de5816.webp?imwidth=1920"
            />

            <ImageCard
              category={selectedCategory}
              refName={selectCategoryRef}
              index={4}
              name="Fabric Curtain - Pinch Pleat - Light Grey"
              functionname={handleChange}
              img="https://api.sedarglobal.com/uploads/100001/lifestyle/1707997195_3c59db94d6241d59fb91.webp?imwidth=1920"
            />

            <ImageCard
              category={selectedCategory}
              refName={selectCategoryRef}
              index={5}
              name="Fabric Curtain - Pinch Pleat - Brown"
              functionname={handleChange}
              img="https://api.sedarglobal.com/uploads/100001/lifestyle/1707997469_091cf9729889cf0ceee7.webp?imwidth=1920"
            />

            <ImageCard
              category={selectedCategory}
              refName={selectCategoryRef}
              index={6}
              name="Fabric Curtain - Pinch Pleat - Light Blue"
              functionname={handleChange}
              img="https://api.sedarglobal.com/uploads/100001/lifestyle/1715150694_08c30ecdccef0d2769f4.webp?imwidth=1920"
            />


          <ImageCard
              category={selectedCategory}
              refName={selectCategoryRef}
              index={7}
              name="Blackout Curtain - Pinch Pleat - Silver"
              functionname={handleChange}
              img="https://api.sedarglobal.com/uploads/100001/lifestyle/1708001442_2465bdeb024eef46bd3a.webp?imwidth=1920"
            />

            <ImageCard
              category={selectedCategory}
              refName={selectCategoryRef}
              index={8}
              name="Blackout Curtain - Pinch Pleat - Silver"
              functionname={handleChange}
              img="https://api.sedarglobal.com/uploads/100001/lifestyle/1709554078_3b9a1062bf8000bdd7f9.webp?imwidth=1920"
            />

            <ImageCard
              category={selectedCategory}
              refName={selectCategoryRef}
              index={9}
              name="Sheer Curtain - Pinch Pleat - White"
              functionname={handleChange}
              img="https://api.sedarglobal.com/uploads/100001/lifestyle/1715922228_dd60fd05ebe7a202a473.webp?imwidth=1920"
            />

            <ImageCard
              category={selectedCategory}
              refName={selectCategoryRef}
              index={10}
              name="Sheer Curtain - Pinch Pleat - Light Grey"
              functionname={handleChange}
              img="https://api.sedarglobal.com/uploads/100001/lifestyle/1707734226_7172496c5bbdf7c09729.webp?imwidth=1920"
            />

            <ImageCard
              category={selectedCategory}
              refName={selectCategoryRef}
              index={11}
              name="Fabric Curtain - Pinch Pleat - Beige"
              functionname={handleChange}
              img="https://api.sedarglobal.com/uploads/100001/lifestyle/1714566897_386fd5f4805cc7138774.webp?imwidth=1920"
            />

           
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Modal;
