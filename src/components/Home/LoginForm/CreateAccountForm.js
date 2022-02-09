import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useForm } from "react-hook-form";

function CreateAccountForm({ inputFrom, inputTitle, loginBtn }) {
 const [open, setOpen] = React.useState(false);
 const handleOpen = () => {
  setOpen(true);
 };
 const handleClose = () => {
  setOpen(false);
 };

 const { register, handleSubmit } = useForm();
 const onSubmit = (data) => console.log(data);

 return (
  <React.Fragment>
   <Button onClick={handleOpen} sx={{ color: "#767676" }}>
    Sign Up
   </Button>
   <Modal
    hideBackdrop
    open={open}
    onClose={handleClose}
    aria-labelledby="child-modal-title"
    aria-describedby="child-modal-description"
   >
    <Box
     sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 400,
      bgcolor: "background.paper",
      border: "",
      boxShadow: 24,
      p: 4,
      borderRadius: "5px",
     }}
    >
     <Typography
      onClick={handleClose}
      sx={{
       marginLeft: "auto",
       padding: "2px 17px ",
       width: "fit-content",
       borderRadius: "50%",
       bgcolor: "#F8F8F8",
       cursor: "pointer",
       fontSize: "1.8rem",
      }}
     >
      x
     </Typography>
     <Typography
      id="modal-modal-title"
      variant="h6"
      component="h2"
      sx={{ fontWeight: "bold", textAlign: "center", fontSize: "1.8rem" }}
     >
      Create Account
     </Typography>

     <Button
      sx={{
       bgcolor: "#4688F1",
       color: "#fff",
       width: "100%",
       py: "1em",
       my: ".8em",
       "&:hover": {
        bgcolor: "#2b7dff",
       },
      }}
     >
      LOG IN WITH GOOGLE
     </Button>
     <Button
      sx={{
       bgcolor: "#3E5C97",
       color: "#fff",
       width: "100%",
       py: "1em",
       my: ".7em",
       "&:hover": {
        bgcolor: "#334c7d",
       },
      }}
     >
      LOG IN WITH FACEBOOK
     </Button>
     <Box
      sx={{
       display: "flex",
       alignItems: "center",
       justifyContent: "space-between",
      }}
     >
      <Box sx={{ width: "40%", height: "2px", bgcolor: "#767676" }}></Box>
      <Typography sx={{ fontFamily: "Lato" }}>OR</Typography>
      <Box sx={{ width: "40%", height: "2px", bgcolor: "#767676" }}></Box>
     </Box>
     <form onSubmit={handleSubmit(onSubmit)}>
      <p className={inputTitle}>Email</p>
      <input
       className={inputFrom}
       {...register("email", { required: true })}
       placeholder="Email"
      />
      <p className={inputTitle}>Password</p>
      <input
       className={inputFrom}
       type="password"
       {...register("password", { required: true })}
       placeholder="Password"
      />
      <br />
      <input className={loginBtn} type="submit" value="LOG IN" />
     </form>
     <Box sx={{ textAlign: "center", color: "#767676" }}>
      <Typography sx={{ fontWeight: "bold", color: "#494949", mt: 1 }}>
       Already have an account?{" "}
       <Button
        onClick={handleClose}
        sx={{
         display: "inline",
         cursor: "pointer",
         textDecoration: "underline",
         m: 0,
         p: 0,
         color: "#000 !important",
        }}
       >
        Log In
       </Button>
      </Typography>
      <Typography
       sx={{
        textDecoration: "underline",
        fontSize: "15px",
        mt: "3px",
        cursor: "pointer",
       }}
      >
       Forgot your password?
      </Typography>
      <Typography sx={{ fontSize: "15px", mt: "15px" }}>
       By logging in, you agree to our
      </Typography>
      <Typography
       variant="h6"
       sx={{ fontSize: "15px", display: "inline-block", mt: "3px" }}
      >
       <Typography
        sx={{
         fontSize: "15px",
         display: "inline-block",
         textDecoration: "underline",
         cursor: "pointer",
        }}
       >
        Privacy Policy
       </Typography>{" "}
       and{" "}
       <Typography
        sx={{
         fontSize: "15px",
         display: "inline-block",
         textDecoration: "underline",
         cursor: "pointer",
        }}
       >
        Terms of Service.
       </Typography>
      </Typography>
     </Box>
    </Box>
   </Modal>
  </React.Fragment>
 );
}
export default CreateAccountForm;
