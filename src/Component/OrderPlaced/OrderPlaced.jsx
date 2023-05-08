import React from 'react'
import orderplacepic from "D:/React/BookStore/bookstore/src/Component/OrderPlaced/orderplaced.png"
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import "./OrderPlaced.css"




const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
}));

function OrderPlaced() {
    return (
        <Grid container className='OrderPlacedGridBox' >
            <Item className='headerOrderPlaced'>
            <Header/>
            </Item>
            <Item className='OrderPlacedGridItem1' xs={12} sm={6} md={4} lg={3}>
                <img src={orderplacepic} alt="" />
            </Item>
            <Item className='OrderPlacedGridItem2' xs={12} sm={6} md={4} lg={3}>
                <div id='orderplacedTxt'>hurray!!! your order is confirmed the order id is #123456 save the order id for further communication..</div>
            </Item>
            <Item className='OrderPlacedGridItem3' xs={12} sm={6} md={4} lg={3}>
                <table>
                    <tr>
                        <th id='th1'>  Email Us</th>
                        <th id='th2'>Contact Us</th>
                        <th id='th3'> Address</th>
                    </tr>
                    <tr >
                        <td> admin@bookstore.com</td>
                        <td>+918163475881</td>
                        <td>
                            42, 14th Main, 15th Cross, Sector 4 ,opp to BDA complex, near Kumarakom restaurant, HSRLayout, Bangalore 560034
                        </td>
                    </tr>
                </table>
            </Item>
            <Item className='OrderPlacedGridItem4' xs={12} sm={6} md={4} lg={3}>
                <Link to="/dashboard">
                <button id='OrderPlacedBtn'>CONTINUE SHOPPING</button>
                </Link>
               
            </Item>
            <Footer/>
        </Grid>
    )
}

export default OrderPlaced
