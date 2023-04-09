import React, { useState, useEffect } from 'react'
import "./BookDetails.css"
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'
import { getCartItems, addCartItem } from '../../Services/DataServices';
import BookCartQuantity from '../BookCartQuantity/BookCartQuantity';

const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
}));


function BookDetails({ setToggle, bookInfo }) {
    const [addToBagToggle, setAddToBagToggle] = useState(true)
    const [bookObj, setBookObj] = useState({})

    const getCartItemsAndUpdte = async () => {

        // let arr = await getCartItems()
        // let book = arr.filter((obj) => obj.product_id._id === bookInfo._id)
        // console.log(arr)
        // console.log(bookInfo._id)
        // console.log(arr.data.result.product_id._id)


        let response = await getCartItems()
        console.log(bookInfo._id)

        for (let i = 0; i < response.data.result.length; i++) {
            if (response.data.result[i]?.product_id._id === bookInfo._id) {
                let itemNo = response.data.result[i].quantityToBuy
                console.log(itemNo)
                setBookObj(response.data.result[i])
                setAddToBagToggle(false)

            }

        }
    }
    const addToCart = async (bookId) => {
        let response = await addCartItem(bookId)
        // console.log(response)
        await getCartItemsAndUpdte()
        return response
    }

    useEffect(() => {
        getCartItemsAndUpdte()
    }, [])

    return (
        <div container className='BookDetailsBox'  >
            <Grid item className='BookDetailsDivBox' xs={12} sm={6} md={4} lg={3} >
                <div  > <span id='home1' onClick={() => setToggle(true)}>Home/ </span><span> Book</span></div>
            </Grid>
            <Grid container className='BookDetailsGridBox' xs={12} sm={12} md={12} lg={9} >

                <Item className='BookDetailsGridItemOne' >
                    <div id='BookDetailsGridItem1'>
                        <img src="https://archive.org/download/2019-Don-t-Make-Me-Think-Revisited/0321965515.jpg" alt="" />
                    </div>
                    <div id='BookDetailsGridItem2'>
                        {
                            addToBagToggle ? <button className='BookDetailBt' id='BookDetailsGridItemBTN1' onClick={() => { addToCart(bookInfo._id); setAddToBagToggle(false) }}> ADD TO BAG</button> : <BookCartQuantity setAddToBagToggle={setAddToBagToggle} bookObj={bookObj} getCartItemsAndUpdte={getCartItemsAndUpdte} />
                        }
                        <button className='BookDetailBt' id='BookDetailsGridItemBTN2'><FavoriteBorderOutlinedIcon /> WISHLIST</button>
                    </div>
                </Item>
                <Item className='BookDetailsGridItemTwo' >
                    <div className='BookDetailsGridItemthri' id='BookDetailsGridItem3'>
                        <CardContent className='Bookdetailtextbox'>
                            <Typography className='BookdetailBooknameBox' gutterBottom>
                                <div>{bookInfo?.bookName}</div>
                            </Typography>
                            <Typography className='BookdetailAuthorNameBox' >
                                <div >{bookInfo?.author}</div>
                            </Typography>
                            <Typography className='BookdetailRatingBox'>
                                <div id='BookdetailRating1'>3<StarOutlinedIcon id="rtstr" /></div>
                                <div id='BookdetailRating2'>(20)</div>
                            </Typography>
                            <Typography className='BookdetailPriceBox'>
                                <div id='Bookdetaildiscountbox'>Rs.{bookInfo?.discountPrice}</div>
                                <div id='Bookdetailactualprice'>Rs.{bookInfo?.price}</div>
                            </Typography>
                        </CardContent>
                    </div >
                    <div className='BookDetailsGridItemthri' id='BookDetailsGridItem4'>
                        <li>Book Details</li>
                    </div>
                    <div className='BookDetailsGridItemthri' id='BookDetailsGridItem5'>
                        <div >OVERALL RATING</div>
                        <div ><StarOutlinedIcon id="star" /><StarOutlinedIcon id="star" /><StarOutlinedIcon id="star" /><StarBorderPurple500OutlinedIcon /><StarBorderPurple500OutlinedIcon /></div>
                    </div>
                </Item>
            </Grid>
        </div>
    )
}

export default BookDetails
