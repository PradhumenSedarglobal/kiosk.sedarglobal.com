import Image from "next/image";
import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";

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
import { Grid } from "@mui/joy";

const ImageCard = ({ functionname, index, img, refName, category, name }) => {
  return (
    <Grid xs={6} sm={6} md={4} item key={index} sx={{ mt: 4,ml:2 }}>


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
           width:200

         }}

      variant="outlined" >
        <CardOverflow>
          <AspectRatio ratio="2" maxHeight={200}>
            <img
              src={img}
              width={100}
              height={100}
              loading="lazy"
              alt=""
            />
          </AspectRatio>
        </CardOverflow>
        <CardContent 
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography  sx={{
                fontFamily: Helvetica_Neue_Bold.style.fontFamily,
                fontWeight: 800,
                color: "#686058",
                textAlign: "center",
                fontSize: "small",
                textWrap: "nowrap",
              }}  level="title-md">{name}</Typography>
        </CardContent>
       
      </Card>

      
    </Grid>
  );
};

export default ImageCard;
