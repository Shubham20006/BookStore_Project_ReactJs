import React from 'react'
import { Box, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import "./OrderSummary.css"



const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
}));

function OrderSummary({ cartInfo }) {
    return (
        <Grid container className='OrderSummaryBox'>
            <Item className='OrderSummaryImg' xs={12} sm={6} md={4} lg={3}>
                <img src="https://archive.org/download/2019-Don-t-Make-Me-Think-Revisited/0321965515.jpg" alt="" />
            </Item>
            <Item className='OrderSummarytextbox' xs={12} sm={6} md={4} lg={3}>
                <Typography className='MyCartBooknameBox' gutterBottom>
                    <div id='OrderSummaryBookname'> {cartInfo?.bookName}</div>
                </Typography>
                <Typography className='OrderSummaryAuthorNameBox' >
                    <div id='OrderSummaryAuthorName'> {cartInfo?.author}</div>
                </Typography>
                <Typography className='OrderSummaryPriceBox'>
                    <div id='OrderSummarydiscountbox'>Rs.{cartInfo?.discountPrice}</div>
                    <div id='OrderSummaryactualprice'>Rs.{cartInfo?.price}</div>
                </Typography>
            </Item>
        </Grid >
    )
}

export default OrderSummary
