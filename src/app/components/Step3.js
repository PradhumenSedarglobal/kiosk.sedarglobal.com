import React, { useEffect, useRef, useState } from "react";
import "../../app/custom.css";
import Grid from "@mui/material/Grid";

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
import ImageCard from "./ImageCard";

const Step3 = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const selectCategoryRef = useRef();
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const handleChange = (index) => {
    console.log("sss", index);
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
        <MainHeading sx={{ mb: 2 }} title="Search Item" />

        <Box
          sx={{
            height: { lg: "calc(100vh - 280px)", overflow: "auto" },
          }}
        >
          <Grid
            sx={{
              overflow: "auto",
              alignItems: {xs:"center",sm:"center",md:"start",lg:"start",xl:"start"},
              justifyContent: {xs:"center",sm:"center",md:"start",lg:"start",xl:"start"},
              px: 2,
              pb: {sm:20,xs:20},
            }}
          >
            <TextField
              sx={{
                marginTop: "10px",
                width: isSmallScreen == true ? "75%" : "75%",
                fontFamily: Helvetica_Neue_Regular.style.fontFamily,
              }}
              id="item-code"
              label="Item Code"
              variant="standard"
            />

            <Button
              sx={{
                padding: "8px",
                width: "85px",
                marginTop: "18px",
                borderRadius: "1px",
                minWidth: "50px",
                background: "#ef9c00",
                color: "white",
                fontFamily: Helvetica_Neue_Regular.style.fontFamily,
                border: "none",
              }}
              variant="outlined"
            >
              Search
            </Button>

            <Typography
              sx={{
                fontFamily: Helvetica_Neue_Bold.style.fontFamily,
                marginTop: "20px",
              }}
              gutterBottom
              variant="h6"
              component="div"
            >
              Material Selection
            </Typography>

            <Grid container spacing={2}>
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
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Step3;
