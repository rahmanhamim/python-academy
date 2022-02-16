import { TableCell, TableRow, Typography } from "@mui/material";
import React, { useState } from "react";

const CartProducts = ({ item }) => {
 const [quantity, setQuantity] = useState(item.quantity);
 const [updatedTotal, setUpdatedTotal] = useState(item.totalPrice);

 const handlePlusQuantity = () => {
  setQuantity((item.quantity += 1));
  setUpdatedTotal(item.price * quantity);
 };
 const handleMinusQuantity = () => {
  setQuantity((item.quantity -= 1));
  setUpdatedTotal(item.price * quantity);
 };

 console.log(item);
 console.log(updatedTotal);

 return (
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
    <Typography sx={{ maxWidth: "200px", ml: 2 }}>{item.title}</Typography>
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
     onClick={() => handleMinusQuantity(item)}
    >
     -
    </Typography>
    {quantity}
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
     onClick={() => handlePlusQuantity(item)}
    >
     +
    </Typography>
   </TableCell>
   <TableCell align="right">{item.price * quantity}</TableCell>
  </TableRow>
 );
};

export default CartProducts;
