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
import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartProvider/CartProvider";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const Cart = () => {
 const [cartItems, setCartItems] = useContext(CartContext);

 let subtotal = cartItems.reduce(function (accumulator, item) {
  return accumulator + item.totalPrice;
 }, 0);
 const VAT = subtotal * 0.15;

 const [grossTotal, setGrossTotal] = useState(subtotal + VAT);
 const [codeValue, setCodeValue] = useState("");

 const handleCouponBtn = () => {
  if (codeValue === "10PER") {
   let grossCalutatedTotal = subtotal - (subtotal * 15) / 100;
   setGrossTotal(grossCalutatedTotal);
  } else {
   alert("Code Not Valid");
  }
 };

 const plusQuantity = (item) => {
  const newCart = cartItems.map((cart) => {
   if (cart.id === item.id) {
    cart.quantity += 1;
   }
   return cart;
  });
  setCartItems(newCart);
 };
 const minusQuantity = (item) => {
  const newCart = cartItems.map((cart) => {
   if (cart.id === item.id) {
    if (item.quantity > 0) {
     item.quantity = item.quantity - 1;
    }
   }
   return cart;
  });
  setCartItems(newCart);
 };

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
           {/* ------------------------------- */}
           {cartItems?.map((item) => (
            <TableRow
             key={item.id}
             sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
             <TableCell
              component="th"
              scope="row"
              sx={{ display: "flex", alignItems: "center" }}
             >
              <img style={{ maxWidth: "60px" }} src={item.img} alt="" />
              <Typography sx={{ maxWidth: "200px", ml: 2 }}>
               {item.title}
              </Typography>
             </TableCell>
             <TableCell align="right">{item.price}</TableCell>
             <TableCell align="right" sx={{ fontSize: "1.1rem" }}>
              <Typography
               component="span"
               sx={{
                mr: 2,
                cursor: "pointer",
                border: "1px solid #4E4848",
                borderRadius: "4px",
                px: 1,
                pb: "2px",
               }}
               onClick={() => minusQuantity(item)}
              >
               -
              </Typography>
              {item.quantity || 1}{" "}
              <Typography
               component="span"
               sx={{
                cursor: "pointer",
                border: "1px solid #4E4848",
                borderRadius: "4px",
                px: 1,
                pb: "2px",
                ml: 1,
               }}
               onClick={() => plusQuantity(item)}
              >
               +
              </Typography>
             </TableCell>
             <TableCell align="right">
              {item.totalPrice || item.price}
             </TableCell>
            </TableRow>
           ))}
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
          onChange={(e) => setCodeValue(e.target.value)}
          style={{
           padding: "1em",
           width: "60%",
           borderRadius: "5px",
           border: "none",
          }}
          placeholder="Coupon Code"
         ></input>
         <Button
          onClick={handleCouponBtn}
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
         <Typography>subtotal</Typography>
         <Typography>£{subtotal}</Typography>
        </Box>
        <hr />
        <Box sx={{ display: "flex", justifyContent: "space-between", pt: 2 }}>
         <Typography>VAT 15%</Typography>
         <Typography>£ {VAT} </Typography>
        </Box>
        <hr />
        <Box sx={{ display: "flex", justifyContent: "space-between", pt: 2 }}>
         <Typography>Total</Typography>
         <Typography>£{grossTotal}</Typography>
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
