import React, { useState } from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import dynamic from "next/dynamic";

const BarcodeScannerComponent = dynamic(
  () => import("react-qr-barcode-scanner").then((mod) => mod.BarcodeScannerComponent),
  { ssr: false }
);

export default function ScanModal() {
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

          <BarcodeScannerComponent
            width={500}
            height={500}
            onUpdate={(err, result) => {
              if (result) setData(result.text);
              else setData("Not Found");
            }}
          />
        
          <p>{data}</p>
        </Sheet>
      </Modal>
    </div>
  );
}
