"use client";
import React, { useEffect, useRef, useState } from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import { QrReader } from "react-qr-reader";
import { Grid, Sheet, Box } from "@mui/joy";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Image from "next/image";

import { Helvetica_Neue_Bold } from "../../theme/typography";
import { useRouter } from "next/router";

export default function ScanModal() {
  const [scaner, setScaner] = useState(false);
  const [open, setOpen] = React.useState(true);
  const [data, setData] = useState(null);
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("backdrop")) {
      // Close modal when clicking outside (on backdrop)
      setShowModal(false);
    }
  };

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
    <div>
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
            maxWidth: "90vw", // Responsive width
            maxHeight: "90vh", // Responsive height
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
            overflow: "auto", // Add scroll if content overflows
          }}
        >
          <ModalClose ref={modalRef} variant="plain" sx={{ m: 1 }} />

          <Grid
            container
            spacing={2} // Add spacing between grid items
            justifyContent="center"
            alignItems="center"
            sx={{ pt: 4 }}
          >
            <Grid item xs={12} md={6} display="flex" justifyContent="center">
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
                    height={210}
                    width={120}
                    src="https://static.vecteezy.com/system/resources/previews/007/116/266/non_2x/scan-the-qr-code-using-a-scanner-on-your-tablet-or-phone-to-confirm-vaccination-or-to-make-a-purchase-flat-illustration-vector.jpg"
                    loading="lazy"
                    alt="Scan QR Code"
                    style={{ maxWidth: "100%", objectFit: "contain" }}
                  />
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
              <Grid item xs={12} md={6} display="flex" justifyContent="center">
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
                    height={185}
                    width={120}
                    src="https://static.vecteezy.com/system/resources/previews/049/345/593/non_2x/icon-select-related-to-choice-symbol-comic-style-simple-illustration-free-vector.jpg"
                    loading="lazy"
                    alt="Build Product"
                    style={{ maxWidth: "100%", objectFit: "contain" }}
                  />
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
            )}
          </Grid>
        </Sheet>
      </Modal>
    </div>
  );
}
