import {
 Box,
 Button,
 Container,
 Grid,
 Table,
 TableBody,
 TableCell,
 TableContainer,
 TableHead,
 TableRow,
 Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartProvider/CartProvider";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const Cart = () => {
 const [cartItems, setCartItems] = useContext(CartContext);
 console.log(cartItems);

 return (
  <>
   <Box
    sx={{
     background: "linear-gradient(135.32deg, #053F66 12.22%, #186FB2 81.8%)",
    }}
   >
    <Navigation />
   </Box>
   <Box sx={{ background: "rgba(71, 68, 228, 0.1)" }}>
    <Container sx={{ py: 10 }}>
     <Box>
      <Grid container spacing={0} sx={{ justifyContent: "space-around" }}>
       <Grid
        item
        xs={12}
        md={8}
        sx={{ bgcolor: "#fff", borderRadius: "10px", p: 3 }}
       >
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#10375C" }}>
         Shopping Cart
        </Typography>
        {/* ----------------------- */}
        <TableContainer component="div">
         <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
           <TableRow>
            <TableCell
             sx={{
              fontWeight: "bold",
              fontSize: "1.4rem",
              color: "#10375C",
              px: 0,
              pt: 4,
             }}
            >
             Course Name
            </TableCell>
            <TableCell
             align="right"
             sx={{
              fontWeight: "bold",
              fontSize: "1.4rem",
              color: "#10375C",
              px: 0,
              pt: 4,
             }}
            >
             Price
            </TableCell>
            <TableCell
             align="right"
             sx={{
              fontWeight: "bold",
              fontSize: "1.4rem",
              color: "#10375C",
              px: 0,
              pt: 4,
             }}
            >
             Quantity
            </TableCell>
            <TableCell
             align="right"
             sx={{
              fontWeight: "bold",
              fontSize: "1.4rem",
              color: "#10375C",
              pt: 4,
             }}
            >
             Total
            </TableCell>
           </TableRow>
          </TableHead>
          <TableBody>
           {/* {rows.map((row) => ( */}
           <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
             row.name
            </TableCell>
            <TableCell align="right">calories</TableCell>
            <TableCell align="right">row.fat</TableCell>
            <TableCell align="right">row.carbs</TableCell>
           </TableRow>
           {/* ))} */}
          </TableBody>
         </Table>
        </TableContainer>
       </Grid>
       <Grid
        item
        xs={12}
        md={3}
        sx={{
         background:
          "linear-gradient(135.32deg, #053F66 12.22%, #186FB2 81.8%)",
         borderRadius: "10px",
         py: 9,
         px: 2,
         color: "#fff",
        }}
       >
        <Typography variant="h4" sx={{ fontWeight: "bold", my: 2 }}>
         Busket Totals
        </Typography>
        <Box sx={{ display: "flex" }}>
         <input
          style={{
           padding: "1em",
           width: "60%",
           borderRadius: "5px",
           border: "none",
          }}
          placeholder="Coupon Code"
         ></input>
         <Button
          sx={{
           bgcolor: "#FF4958",
           color: "#fff",
           width: "40%",
           "&:hover": {
            bgcolor: "#0F588D",
           },
          }}
         >
          Apply
         </Button>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", pt: 2 }}>
         <Typography>Subtotal</Typography>
         <Typography>£</Typography>
        </Box>
        <hr />
        <Box sx={{ display: "flex", justifyContent: "space-between", pt: 2 }}>
         <Typography>VAT</Typography>
         <Typography>£</Typography>
        </Box>
        <hr />
        <Box sx={{ display: "flex", justifyContent: "space-between", pt: 2 }}>
         <Typography>Total</Typography>
         <Typography>£</Typography>
        </Box>
        <Button
         sx={{
          bgcolor: "#FF4958",
          color: "#fff",
          width: "100%",
          mt: 2,
          "&:hover": {
           bgcolor: "#0F588D",
          },
         }}
        >
         Proceed to Checkout
        </Button>
       </Grid>
      </Grid>
     </Box>
    </Container>
    <Footer></Footer>
   </Box>
  </>
 );
};

export default Cart;