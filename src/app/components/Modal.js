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
    console.log("sss", index);
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
        </Box>
      </Box>
    </>
  );
};

export default Modal;
