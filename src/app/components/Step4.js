import "../../app/custom.css";

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

import Grid from "@mui/material/Grid2";
import MainHeading from "./MainHeading";

const Step4 = () => {
  return (
    <>
      {/* Middle Content */}

      <Box
        sx={{
          userSelect: "none",
          paddingBottom: "1.5rem",
        }}
      >
        <MainHeading sx={{ mb: 2 }} title="Summery" />

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
            <Typography
              sx={{
                fontFamily: Helvetica_Neue_Bold.style.fontFamily,
                marginTop: "20px",
              }}
              gutterBottom
              variant="h6"
              component="div"
            >
              Pinch Pleat Curtain
            </Typography>

            <Grid
              container
              justifyContent="space-between"
              sx={{ fontFamily: Helvetica_Neue_Regular.style.fontFamily }}
            >
              <Grid item sx={{ mt: 2, fontSize: "small", fontWeight: "700" }}>
                <Grid xs={6}>Quantity</Grid>
              </Grid>

              <Grid item sx={{ mt: 2, fontSize: "small", textWrap: "nowrap" }}>
                <Grid xs={6}>1 Qty</Grid>
              </Grid>
            </Grid>

            <Grid container justifyContent="space-between">
              <Grid item sx={{ mt: 2, fontSize: "small", fontWeight: "700" }}>
                <Grid xs={6}>Lining Option</Grid>
              </Grid>
              <Grid item sx={{ mt: 2, fontSize: "small", textWrap: "nowrap" }}>
                <Grid xs={6}>No Lining</Grid>
              </Grid>
            </Grid>

            <Grid container justifyContent="space-between">
              <Grid item sx={{ mt: 2, fontSize: "small", fontWeight: "700" }}>
                <Grid xs={6}>Track Option</Grid>
              </Grid>
              <Grid item sx={{ mt: 2, fontSize: "small", textWrap: "nowrap" }}>
                <Grid xs={6}>No Track (Fabric Only)</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Step4;
