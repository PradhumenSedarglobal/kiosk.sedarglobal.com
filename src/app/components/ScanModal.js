"use client";
import React, { useState } from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import { QrReader } from "react-qr-reader";
import { Grid, Sheet } from "@mui/joy";

import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import Image from "next/image";

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

export default function ScanModal() {
  const [scaner, setScaner] = useState(false);
  const [open, setOpen] = React.useState(true);
  const [data, setData] = useState("Not Found");

  const handleBarCodeClick = () => {
    setScaner(true);
  };

  return (
    <div>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            width: "600px",
            height: "400px",
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose
            variant="plain"
            sx={{
              m: 1,
              "&:hover": {
                backgroundColor: "red",
                color: "white",
              },
            }}
          />

          <Grid container justifyContent={scaner ? "center" : "space-between"} sx={{ pt: 5 }}>
            <Grid item md={6}>


              {scaner && (
                <QrReader
                  constraints={{ facingMode: "environment" }}
                  onResult={(result, error) => {
                    if (result) setData(result.text);
                    if (error) console.error(error);
                  }}
                  style={{ width: "400px", height: "400px" }}
                />
              )}

              {!scaner && (
                   <Card
                   onClick={()=>handleBarCodeClick()}
                   variant="outlined"
                   sx={{ width: 200, textAlign: "center", alignItems: "center" }}
                 >
                   {/* <CardOverflow> */}
   
                   <Image
                     height={185}
                     width={120}
                     src="https://static.vecteezy.com/system/resources/previews/007/116/266/non_2x/scan-the-qr-code-using-a-scanner-on-your-tablet-or-phone-to-confirm-vaccination-or-to-make-a-purchase-flat-illustration-vector.jpg"
                     loading="lazy"
                     alt=""
                   />
   
                   {/* </CardOverflow> */}
                   <CardContent>
                     <Typography
                       sx={{ fontFamily: Helvetica_Neue_Bold.style.fontFamily }}
                       level="title-md"
                     >
                       Scan your product
                     </Typography>
                   </CardContent>
                 </Card>
              )}
             
            </Grid>


            {!scaner && (
                  <Grid item md={6}>
                  <Card
                    variant="outlined"
                    sx={{ width: 200, alignItems: "center" }}
                  >
                    <CardOverflow>
                      {/* <AspectRatio ratio="2"> */}
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/049/345/593/non_2x/icon-select-related-to-choice-symbol-comic-style-simple-illustration-free-vector.jpg"
                        loading="lazy"
                        alt=""
                      />
                      {/* </AspectRatio> */}
                    </CardOverflow>
                    <CardContent>
                      <Typography
                        sx={{ fontFamily: Helvetica_Neue_Bold.style.fontFamily }}
                        level="title-md"
                      >
                        Build your product
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
            ) }
          


          </Grid>
        </Sheet>
      </Modal>
    </div>
  );
}
