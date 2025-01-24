import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";

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

const ImageCard = ({ functionname, index, img, refName, category, name,selected }) => {
  return (
    <Grid xs={6} sm={6} md={4} item key={index} sx={{ mt: 2 }}>
      <Card
        ref={refName}
        onClick={() => functionname(index)}
        sx={{
          boxShadow:
            category === index || selected == true ? "0 0 0 3px #ef9c00" : "0 0 0 2px #ededec",
          borderRadius: "10px",
          width: "100%", // Ensure the card takes up full width
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "&:hover": {
            boxShadow:
              category === index ? "0 0 0 3px #ef9c00" : "0 0 0 2px #56504b",
          },
          "@media (max-width: 768px)": {
            // For tablets
            width: "100%", // Full width for tablets
          },
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            pt: "0",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "100%", // Ensure Box is 100% width for responsive design
              maxWidth: 300, // You can adjust maxWidth based on your design
            }}
          >
            <Image
              src={img}
              layout="responsive" // Automatically scales the image while maintaining the aspect ratio
              width={200} // Set the width for mobile
              height={150} // Set height for mobile
              alt="Picture of the author"
              style={{
                objectFit: "cover", // Ensures the image covers the container without distortion
              }}
            />
          </Box>

          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%", // Ensure the actions section is centered and takes full width
            }}
          >
            <Typography
              sx={{
                fontFamily: Helvetica_Neue_Bold.style.fontFamily,
                fontWeight: 800,
                color: "#686058",
                textAlign: "center",
                fontSize: "small",
                wordWrap: "break-word", // Ensures text wraps if it's too long
              }}
              gutterBottom
              variant="h6"
              component="div"
            >
              {name}
            </Typography>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ImageCard;
