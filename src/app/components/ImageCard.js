import { Box, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

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

const ImageCard = ({ functionname, index, img,refName,category,name }) => {
  return (
    <Grid xs={6} sm={6} md={4} item key={index} sx={{mt:2}}>
      
      <Card
        
        ref={refName}
        onClick={() => functionname(index)}  
        sx={{
          
          boxShadow:
           category === index
              ? "0 0 0 3px #ef9c00"
              : "0 0 0 2px #ededec",
          borderRadius: "10px",
          "&:hover": {
            boxShadow:
            category === index
                ? "0 0 0 3px #ef9c00"
                : "0 0 0 2px #56504b",
          },
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            pt:"0"
          }}
        >
          <Box>
       
            <Image
              src={img}
              width={200}
              height={150}
              alt="Picture of the author"
              style={{
                objectFit: "cover",
              }}
            />
          
          </Box>

          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              // paddingTop: 1,
            }}
          >
            <Typography
              
              sx={{
                fontFamily: Helvetica_Neue_Bold.style.fontFamily,
                fontWeight: 800,
                color: "#686058",
                textAlign: "center",
                fontSize: "small",
                // whiteSpace: "normal",
                // overflow: "hidden",
                // textOverflow: "ellipsis",
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
