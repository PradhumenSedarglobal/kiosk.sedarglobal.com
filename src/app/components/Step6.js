import React, { useState } from "react";

// MUI Components
import RadioGroup from "@mui/joy/RadioGroup";
import { Box, FormControlLabel, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid2";

// Custom Components
import MainHeading from "./MainHeading";

const Step6 = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);

  const handleChange = (index) => {
    setSelectedCategory(index);
  };

  return (
    <>
      <Box
        sx={{
          userSelect: "none",
          paddingBottom: "1.5rem",
        }}
      >
        <MainHeading sx={{ mb: 2 }} title="Control Option" />

        <Box
          className="bigipads"
          sx={{
            height: { lg: "calc(100vh - 240px)", overflow: "auto" },
          }}
        >
          <RadioGroup
            defaultValue="No Track(Fabric Only)"
            name="controlled-radio-buttons-group"
            onChange={handleChange}
            sx={{ my: 1, mx: 3, display: "flex", flexDirection: "row", pb: 15 }}
          >
            {/* First row with two radio buttons */}
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControlLabel
                  value="Corded Track"
                  control={<Radio />}
                  label="Corded Track"
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      marginLeft: "10px",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel
                  value="Cordless Track"
                  control={<Radio />}
                  label="Cordless Track"
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      marginLeft: "10px",
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
                    "& .MuiFormControlLabel-label": {
                      marginLeft: "10px",
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
                    "& .MuiFormControlLabel-label": {
                      marginLeft: "10px",
                    },
                  }}
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </Box>
      </Box>
    </>
  );
};

export default Step6;
