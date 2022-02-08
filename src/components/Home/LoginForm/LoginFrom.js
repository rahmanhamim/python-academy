import { Box, Button, Modal, Typography } from "@mui/material";
import { height } from "@mui/system";
import React from "react";

const LoginFrom = ({ open, handleClose }) => {
 const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
 };

 return (
  <div>
   <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
   >
    <Box sx={style}>
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
    </Box>
   </Modal>
  </div>
 );
};

export default LoginFrom;
