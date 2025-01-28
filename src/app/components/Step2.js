import React, { useEffect, useRef, useState } from "react";
import "../../app/custom.css";
import Grid from "@mui/material/Grid";
import Input from '@mui/joy/Input';

import {
  Box,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
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

const Step2 = () => {
  const [selectedOption, setSelectedOption] = useState("");

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
        <MainHeading sx={{ mb: 2 }} title="Size" />

        <Box
          sx={{
            height: { lg: "calc(100vh - 240px)", overflow: "auto" },
          }}
        >
          <Grid
            sx={{
              alignItems: {xs:"center",sm:"center",md:"start",lg:"start",xl:"start"},
              justifyContent: {xs:"center",sm:"center",md:"start",lg:"start",xl:"start"},
              px: 2,
              pb: {sm:20,xs:20,md:5,lg:5},
            }}
          >
            <Typography
              variant="button"
              gutterBottom
              sx={{
                display: "block",
                fontFamily: Helvetica_Neue_Bold.style.fontFamily,
                marginBottom: "20px",
              }}
            >
              Measurement
            </Typography>

            <Box>
              <InputLabel
                sx={{
                  marginBottom: "10px",
                  fontFamily: Helvetica_Neue_Bold.style.fontFamily,
                }}
              >
                Product Width (Min 100 cm - Max 500 cm)
              </InputLabel>
              <Input  size="lg" variant="outlined" sx={{backgroundColor:"#fff",fontFamily: Helvetica_Neue_Regular.style.fontFamily}} value="100" />
            </Box>
            <Box>
              <InputLabel
                sx={{
                  marginTop: "20px",
                  marginBottom: "10px",
                  fontFamily: Helvetica_Neue_Bold.style.fontFamily,
                }}
              >
                Product Height (Min 200 cm - Max 375 cm)
              </InputLabel>
              <Input size="lg" variant="outlined" sx={{backgroundColor:"#fff",fontFamily: Helvetica_Neue_Regular.style.fontFamily}}  value="200"/>
            </Box>
            <Box>
              <Typography
                variant="button"
                gutterBottom
                sx={{
                  display: "block",
                  fontFamily: Helvetica_Neue_Bold.style.fontFamily,
                  marginTop: "20px",
                }}
              >
                Quantity
              </Typography>

              <FormControl fullWidth sx={{ zIndex: 0, marginTop: "10px" }}>
                <InputLabel id="demo-simple-select-label">Select</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Select"
                  value={selectedOption}
                  onChange={handleChangeSelect}
                  size="small"
                  sx={{
                    padding: "6px 10px",
                  }}
                >
                  <MenuItem Selected value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Step2;
