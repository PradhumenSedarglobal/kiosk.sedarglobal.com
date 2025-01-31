import React,{useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import { MuiTelInput } from "mui-tel-input";
import { useForm } from "react-hook-form"



import { Alert, Snackbar } from "@mui/material";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import { Grid, Sheet, styled } from "@mui/joy";
import { MarginRounded } from "@mui/icons-material";
import Step4 from "./Step4";
import Home from "@/pages";
import { useDispatch, useSelector } from "react-redux";
import { manualStep } from "../lib/redux/slices/stepSlice";


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






export default function PopupModal({ handleSubmit, formClose, setFormClose }) {
  const [formSubmited,setFormSubmited] = useState(false);
  //const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fonts = useSelector((state)=> state.font);
 

  const {register,handleSubmit:handleSubmit2,watch,formState:{errors}, clearErrors} = useForm();

  // const onSubmit = (data) => console.log(data);

  const onSubmit = (data) => {
    handleSubmit(true);
  }

  console.log(watch("example"));

  const [phone, setPhone] = React.useState("+971");

  const handleChange = (newPhone) => {
    clearErrors('mobile_no');
    setPhone(newPhone);
  };

  const dispatch = useDispatch();

  const StyledTelInput = styled(MuiTelInput)({
    "& .MuiOutlinedInput-root": {
      pl: 10,
      // border: 'none',
      display: "flex",
      justifyContent: "flex-end",
      fontFamily: fonts.Helvetica_Neue_Regular.style.fontFamily,
    },
    "& .MuiFormControl-root .MuiInputBase-root .MuiInputAdornment-root .MuiInputBase-input": {
      width: {md: 275, sm:'100%', xs:'100%'}
      // border: 'none',
    },
  });


  return (
    <div>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={formClose}
        onClose={(_event, reason) =>{
          if (reason && reason === "backdropClick")
            return;
          handleSubmit('close'); setFormClose(false); dispatch(manualStep(5))
        }}
        
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
                backgroundColor: "#eaaf60",
                color: "white",
              },
            }}
          />

        <form onSubmit={handleSubmit2(onSubmit)}>

          <Grid sx={{ mt: 5 }}  gap={2} container justifyContent="space-between">
            <Grid item>
              <Typography
                sx={{ fontFamily: fonts.Helvetica_Neue_Medium.style.fontFamily }}
                id="modal-modal-title"
                variant="p"
                component="p"
              >
                Customer Name :
              </Typography>
            </Grid>
            <Grid item sx={{width: {md: 275, sm:'100%', xs:'100%'}}}>
              <Input
                {...register("customer_name",{required:true})}
                variant="outlined"
                sx={{
                  fontFamily: fonts.Helvetica_Neue_Light.style.fontFamily,
                }}
                placeholder="Enter Name"
              />
              {errors.customer_name && <span className="error" style={{fontFamily:fonts.Helvetica_Neue.style.fontFamily}}>Customer name is required</span>}
            </Grid>
          </Grid>

          <Grid sx={{ mt: 2 }} gap={2} container justifyContent="space-between">
            <Grid item>
              <Typography
                sx={{ fontFamily: fonts.Helvetica_Neue_Medium.style.fontFamily }}
                id="modal-modal-title"
                variant="p"
                component="p"
              >
                Mobile No :
              </Typography>
            </Grid>
            <Grid item sx={{width: {md: 275, sm:'100%', xs:'100%'}}}>
              <StyledTelInput
                {...register("mobile_no",{required:true})}
                size="small"
                value={phone}
                sx={{width:"100%"}}
                onChange={handleChange}
              />
              {errors.mobile_no && <span className="error" style={{fontFamily:fonts.Helvetica_Neue.style.fontFamily}}>Mobile No is required</span>}
            </Grid>
          </Grid>

          <Grid sx={{ mt: 2 }} gap={2} container justifyContent="space-between">
            <Grid item>
              <Typography
                sx={{ fontFamily: fonts.Helvetica_Neue_Medium.style.fontFamily }}
                id="modal-modal-title"
                variant="p"
                component="p"
              >
                Style consultant Id :
              </Typography>
            </Grid>
            <Grid item sx={{width: {md: 275, sm:'100%', xs:'100%'}}}>
              <Input
                {...register("salesmen_id",{required:true})}
                variant="outlined"
                sx={{
                  fontFamily: fonts.Helvetica_Neue_Light.style.fontFamily,
                }}
                placeholder="Enter consultant Id"
               
              />
              {errors.salesmen_id && <span className="error" style={{fontFamily:fonts.Helvetica_Neue.style.fontFamily}}>Consultant Id is required</span>}
            </Grid>
          </Grid>

          <Grid
            sx={{
              mt:5,
              fontFamily: fonts.Helvetica_Neue_Regular.style.fontFamily,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              // color="#eaaf60"
              sx={{backgroundColor:"#eaaf60",color:"#fff",'&:hover':{
                backgroundColor:"#010101",
              }}}
              // onClick={() => handleSubmit(true)}
              size="lg"
              variant="soft"
              type="submit"
            >
              Submit
            </Button>
          </Grid>

          </form>
        </Sheet>
      </Modal>

      {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          sx={{
            backgroundColor:"#ef9c00",
            width: "100%" 
          }}
          // severity="success"
          variant="filled"
          
        >
          Item add to cart successfully!
        </Alert>
      </Snackbar> */}
    </div>
  );
}
