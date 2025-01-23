"use client";
import React, { useState } from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import { QrReader } from "react-qr-reader";
import { Grid, Sheet } from "@mui/joy";
import { Card } from "@mui/material";

export default function ScanModal() {
  const [open, setOpen] = React.useState(true);
  const [data, setData] = useState("Not Found");

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
            width: "500px",
            height: "500px",
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

          <Grid container>
            <Grid item md={6}>
              {/* <QrReader
                constraints={{ facingMode: "environment" }}
                onResult={(result, error) => {
                  if (result) setData(result.text);
                  if (error) console.error(error);
                }}
                style={{ width: "200px", height: "200px" }}
              /> */}
            </Grid>

            <Grid item md={6}>
              <QrReader
                constraints={{ facingMode: "environment" }}
                onResult={(result, error) => {
                  if (result) setData(result.text);
                  if (error) console.error(error);
                }}
                style={{ width: "200px", height: "200px" }}
              />
            </Grid>
          </Grid>

          
        </Sheet>
      </Modal>
    </div>
  );
}
