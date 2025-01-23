'use client'
import React, { useState } from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import { QrReader } from "react-qr-reader";
import { Sheet } from "@mui/joy";

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
          sx={{ maxWidth: 500, borderRadius: "md", p: 3, boxShadow: "lg" }}
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

          <QrReader
            constraints={{ facingMode: "environment" }}
            onResult={(result, error) => {
              if (result) setData(result.text);
              if (error) console.error(error);
            }}
            style={{ width: "500px",height:"500px" }}
          />
          <p>{data}</p>

        </Sheet>
      </Modal>
    </div>
  );
}
