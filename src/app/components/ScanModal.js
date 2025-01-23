import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import { MuiTelInput } from "mui-tel-input";

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
import { Alert, Snackbar } from "@mui/material";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { Grid, Sheet, styled } from "@mui/joy";
import { MarginRounded } from "@mui/icons-material";
import { BarcodeScanner } from "react-barcode-scanner";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 270,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  fontSize: "x-small",
  pl: 10,
};

const StyledTelInput = styled(MuiTelInput)({
  "& .MuiOutlinedInput-root": {
    pl: 10,
    // border: 'none',
    display: "flex",
    justifyContent: "flex-end",
    fontFamily: Helvetica_Neue_Regular.style.fontFamily,
  },
  "& .MuiFormControl-root .MuiInputBase-root .MuiInputAdornment-root .MuiInputBase-input":
    {
      width: { md: 275, sm: "100%", xs: "100%" },
      // border: 'none',
    },
});

export default function ScanModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [phone, setPhone] = React.useState("+971-2-1234567");

  const handleChange = (newPhone) => {
    setPhone(newPhone);
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
          <BarcodeScanner />
        </Sheet>
      </Modal>
    </div>
  );
}
