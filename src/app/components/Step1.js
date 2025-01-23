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

  useEffect(() => {
    console.log("test", selectCategoryRef.current);
  }, []);

  console.log(MediumScreen, "MediumScreen");

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

export default Step1;
