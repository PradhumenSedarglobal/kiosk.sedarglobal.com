import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Custom Components
import MainHeading from "./MainHeading";
import ImageCard from "./ImageCard";

// MUI Components
import {Box,Modal,Typography} from "@mui/material";
import { ModalClose, ModalDialog } from "@mui/joy";
import Grid from "@mui/material/Grid";

// Redux
import { useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../services/categoryApi";


const Step1 = ({successValue,stepcount}) => {
  const [open,setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const selectCategoryRef = useRef();



  // Redux 
  const fonts = useSelector((state)=> state.font);
  const {data,error,isLoading} = useGetCategoriesQuery();

  const handleChange = (index) => {
    setSelectedCategory(index);
  };

  const handleChangeSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(()=>{
   console.log(stepcount);
  
    if(successValue){
      setOpen(true);

      

      setTimeout(()=>{
        setOpen(false);
      },3000);
    }
  },[successValue])


  return (
    <>
     
      
      {/* Success Modal Start */}
        {successValue && stepcount != 1 && (
            <Modal open={open}>
            <ModalDialog onClick={()=>setOpen(false)}>
              <ModalClose />
              <Image height={200} width={260} src="/success.gif" alt="success" />
              <Typography sx={{fontFamily:fonts.Helvetica_Neue_Thin.style.fontFamily,textAlign:"center"}}>Data Submited Successfully!!</Typography>
            </ModalDialog>
          </Modal>
        )}
      {/* Success Modal End */}

       {/* Step 1st start */}
          <Box
            sx={{
              userSelect: "none",
              paddingBottom: "1.5rem",
            }}
          >
            <MainHeading sx={{ mb: 2 }} title="Category Selection" />

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
                  pb: {sm:20,xs:20,md:5,lg:5},
                }}
              >
                <ImageCard
                  category={selectedCategory}
                  refName={selectCategoryRef}
                  index={1}
                  name="Curtains & Drapes"
                  link=""
                  selected={true}
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
       {/* Step 1st end */}
    </>
  );
};

export default Step1;
