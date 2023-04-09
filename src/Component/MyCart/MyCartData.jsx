import React from 'react'
import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import BookCartQuantity from '../BookCartQuantity/BookCartQuantity';
import "./MyCartData.css"




const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
}));

function MyCartData({getMyCartItem,cartInfo,cartItem}) {
    console.log(cartInfo)
    const bookdata = cartInfo

   
    return (
        <Grid container className='MyCartDataBox'>
            <Item className='MyCartImg' xs={12} sm={6} md={4} lg={3}>
                <img src="https://archive.org/download/2019-Don-t-Make-Me-Think-Revisited/0321965515.jpg" alt="" />
            </Item>
            <Item className='MyCarttextbox' xs={12} sm={6} md={4} lg={3}>
                <Typography className='MyCartBooknameBox' gutterBottom>
                    <div id='MyCartBookname'> {bookdata?.bookName}</div>
                </Typography>
                <Typography className='MyCartAuthorNameBox' >
                    <div id='MyCartAuthorName'> {bookdata?.author}</div>
                </Typography>
                <Typography className='MyCartPriceBox'>
                    <div id='MyCartdiscountbox'>Rs.{bookdata?.discountPrice}</div>
                    <div id='MyCartactualprice'>Rs.{bookdata?.price}</div>
                </Typography>
                <div className="bookcartquantity_Mycartdata">
                    <div><BookCartQuantity  bookObj={cartItem} getCartItemsAndUpdte={getMyCartItem}/></div>
                    <div>Remove</div>
                </div>
            </Item>
        </Grid >
    )
}

export default MyCartData
