import React, { useEffect, useRef, useState } from "react";
import "../../app/custom.css";
import Grid from "@mui/material/Grid";

import { Box, useMediaQuery } from "@mui/material";

import MainHeading from "./MainHeading";
import ImageCard from "./ImageCard";
import { styled, useTheme } from "@mui/material/styles";

const Step1 = () => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const selectCategoryRef = useRef();
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const MediumScreen = useMediaQuery("(max-width: 768px)");

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
        <MainHeading sx={{ mb: 2 }} title="Select Category" />
        <Box
          sx={{
            height: { lg: "calc(100vh - 280px)",overflow: "auto" },
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              alignItems: {xs:"center",sm:"center",md:"start",lg:"start",xl:"start"},
              justifyContent: {xs:"center",sm:"center",md:"start",lg:"start",xl:"start"},
              px: 2,
              pb: {sm:15,xs:15},
            }}
          >
            <ImageCard
              category={selectedCategory}
              refName={selectCategoryRef}
              index={1}
              name="Curtains & Drapes"
              link=""
              functionname={handleChange}
              img="https://api.sedarglobal.com/uploads/100001/category/thumbnail/1634388691_db8499c6f8e7e2af4f6a.jpg"
            />

            <ImageCard
              category={selectedCategory}
              refName={selectCategoryRef}
              index={2}
              name="Blinds & Shades"
              functionname={handleChange}
              img="https://api.sedarglobal.com/uploads/100001/category/thumbnail/1660914255_63f9b70cb5d9919833ce.jpg"
            />

            <ImageCard
              category={selectedCategory}
              refName={selectCategoryRef}
              index={3}
              name="Wallpaper"
              functionname={handleChange}
              img="https://api.sedarglobal.com/uploads/100001/category/thumbnail/1636273291_50b4b7e1af3ccc0b81bf.jpg"
            />

            <ImageCard
              category={selectedCategory}
              refName={selectCategoryRef}
              index={4}
              name="Smart Home"
              functionname={handleChange}
              img="https://api.sedarglobal.com/uploads/100001/category/thumbnail/1635336114_0cdf7569b4b0cf3278f8.jpg"
            />

            <ImageCard
              category={selectedCategory}
              refName={selectCategoryRef}
              index={5}
              name="Folding Doors"
              functionname={handleChange}
              img="https://api.sedarglobal.com/uploads/100001/category/thumbnail/1635336029_6a569d40e47cef6878bb.jpg"
            />

            <ImageCard
              category={selectedCategory}
              refName={selectCategoryRef}
              index={6}
              name="Outdoor"
              functionname={handleChange}
              img="https://api.sedarglobal.com/uploads/100001/category/thumbnail/1635335982_54441749439724d5cb3c.jpg"
            />

            <ImageCard
              category={selectedCategory}
              refName={selectCategoryRef}
              index={7}
              name="Furnishings"
              functionname={handleChange}
              img="https://api.sedarglobal.com/uploads/100001/category/thumbnail/1635336166_c817833a064d4c901dba.jpg"
            />
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Step1;
