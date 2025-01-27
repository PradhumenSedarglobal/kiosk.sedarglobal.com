import React, { useEffect, useRef, useState } from "react";
import "../../app/custom.css";
import Grid from "@mui/material/Grid";
import { DM_Serif_Text } from "next/font/google";

import { Noto_Sans } from "next/font/google";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
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
  porter_bold_3,
} from "../../theme/typography";
import MainHeading from "./MainHeading";
import ImageCard from "./ImageCard";
import PopupModal from "./PopupModal";

import { ModalClose, ModalDialog } from "@mui/joy";
import Image from "next/image";

const dmserif = DM_Serif_Text({ weight: "400", subsets: ["latin"] });

const notoSense = Noto_Sans({ weight: "400", subsets: ["latin"] });

const Step1 = ({successValue,page,stepcount}) => {
  const [open,setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const selectCategoryRef = useRef();

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
      {/* Middle Content */}

      {successValue && stepcount != 1 && (
          <Modal open={open} >
          <ModalDialog onClick={()=>setOpen(false)}>
            <ModalClose />
            <Image height={200} width={260} src="/success.gif" alt="success" />
            <Typography sx={{fontFamily:Helvetica_Neue_Thin.style.fontFamily,textAlign:"center"}}>Data Submited Successfully!!</Typography>
          </ModalDialog>
        </Modal>
      )}

      <Box
        sx={{
          userSelect: "none",
          paddingBottom: "1.5rem",
        }}
      >
        <MainHeading sx={{ mb: 2 }} title="Category Selection" />

        <Box
          sx={{
            height: { lg: "calc(100vh - 280px)", overflow: "auto" },
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
              name="Curtains & Drapes"
              link=""
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
    </>
  );
};

export default Step1;
