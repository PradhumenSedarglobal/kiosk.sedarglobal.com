"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

// MUI Components
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import { Grid, Sheet, Box } from "@mui/joy";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

// Scan QR Package
import { QrReader } from "react-qr-reader";

// Redux
import { showScanner } from "../lib/redux/slices/scannerSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ScanModal() {
  const [scaner, setScaner] = useState(false);
  const [open, setOpen] = React.useState(true);
  const [data, setData] = useState(null);
  const router = useRouter();
  const modalRef = useRef();

  // Redux
  const fonts = useSelector((state) => state.font);
  const dispatch = useDispatch();

  const handleManualClick = () => {
    setOpen(false);
  };

  const handleBarCodeClick = () => {
    setScaner(true);
  };


  useEffect(() => {
    if (data !== null) {
      router.push(data);
    }
  }, [data]);


  return (
    <>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={(_event, reason) =>{
          if (reason && reason === "backdropClick")
            return;
          setOpen(false)
        }}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: "90vw", 
            maxHeight: "90vh", 
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
            overflow: "auto", 
          }}
        >
          <ModalClose ref={modalRef} onClick={() => dispatch(showScanner(false))} variant="plain" sx={{ m: 1 }} />


          <Grid
            container
            spacing={2}
            justifyContent={scaner ? "center" : "space-between"}
            alignItems="center"
            sx={{ pt: 4 }}
          >
            <Grid item xs={6} md={6} display="flex" justifyContent="center">
              {" "}
              {/* Added flexbox for centering */}
              {scaner ? (
                <Box sx={{ width: "400px", maxWidth: 400 }}>
                  <QrReader
                    constraints={{ facingMode: "environment" }}
                    onResult={(result, error) => {
                      if (result) setData(result.text);
                      if (error) console.error(error);
                    }}
                    style={{ width: "200px", height: "200px" }}
                  />
                </Box>
              ) : (
                <Card
                  onClick={handleBarCodeClick}
                  variant="outlined"
                  sx={{
                    width: "100%",
                    maxWidth: 200,
                    textAlign: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <Image
                    height={128}
                    width={128}
                    src="/scanner.png"
                    loading="lazy"
                    alt="Scan QR Code"
                    style={{ maxWidth: "100%", objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography
                      sx={{ fontFamily: fonts.Helvetica_Neue_Bold.style.fontFamily,fontSize:"smaller" }}
                      level="title-md"
                      
                    >
                      Scan a product
                    </Typography>
                  </CardContent>
                </Card>
              )}
            </Grid>

            {!scaner && (
              <Grid item xs={6} md={6} display="flex" justifyContent="center">
                <Card
                  onClick={() => handleManualClick()}
                  variant="outlined"
                  sx={{
                    width: "100%",
                    maxWidth: 200,
                    textAlign: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    height={128}
                    width={128}
                    src="/manual.png"
                    loading="lazy"
                    alt="Build Product"
                    style={{ maxWidth: "100%", objectFit: "contain" }}
                  />
                  <CardContent>
                    <Typography
                      sx={{ fontFamily: fonts.Helvetica_Neue_Bold.style.fontFamily,fontSize:"smaller" }}
                      level="title-md"
                    >
                      Build your product
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )}
          </Grid>
        </Sheet>
      </Modal>
    </>
  );
}
