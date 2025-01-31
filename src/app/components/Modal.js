import React, {useRef, useState } from "react";

// MUI Components
import {Box} from "@mui/material";
import Grid from "@mui/material/Grid";

// Custom Components
import MainHeading from "./MainHeading";
import ImageCard from "./ImageCard";


const Modal = () => {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const selectCategoryRef = useRef();


  const handleChange = (index) => {
    setSelectedCategory(index);
  };

 

  return (
    <>
      {/* Modal Start */}
        <Box
          sx={{
            userSelect: "none",
            paddingBottom: "1.5rem",
          }}
        >
          <MainHeading sx={{ mb: 2 }} title="Modal Selection" />

          <Box
            className="bigipads"
            sx={{
              height: { lg: "calc(100vh - 240px)", overflow: "auto" },
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                alignItems: {xs:"center",sm:"center",md:"start",lg:"start",xl:"start"},
                justifyContent: {xs:"center",sm:"center",md:"start",lg:"start",xl:"start"},
                px: 2,
                pb: {sm:20,xs:20,md:5,lg:5}
              }}
            >
              <ImageCard
                category={selectedCategory}
                refName={selectCategoryRef}
                index={1}
                selected={true}
                name="Ripple Fold"
                functionname={handleChange}
                img="https://api.sedarglobal.com/uploads/100001/lifestyle/1697618134_6e6fb48c2201f95bc514.webp?imwidth=1920"
                
              />

            <ImageCard
                category={selectedCategory}
                refName={selectCategoryRef}
                index={2}
                name="Pinch Pleat Curtain"
                functionname={handleChange}
                img="https://api.sedarglobal.com/uploads/100001/lifestyle/1707808691_60e89e939d376706dabd.webp?imwidth=200"
              />

              <ImageCard
                category={selectedCategory}
                refName={selectCategoryRef}
                index={3}
                name="Fabric Curtain - Eyelet"
                functionname={handleChange}
                img="https://api.sedarglobal.com/uploads/100001/lifestyle/1708000430_546345798927edf987f6.webp?imwidth=200"
              />


            

            

            
            </Grid>
          </Box>
        </Box>
      {/* Modal End */}
    </>
  );
};

export default Modal;
