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
        <Grid container className='BookDetailsBox'  >
            <Grid item className='BookDetailsDivBox'  >
                <div id='home1' onClick={() => setToggle(true)}>Home/ </div><div> Book</div>
            </Grid>
            <Grid item container  className='BookDetailsGridBox' xs={12} lg={8.5}  >

                <Item className='BookDetailsGridItemOne' xs={12} sm={6} md={4} lg={3} >
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
                <Item className='BookDetailsGridItemTwo' xs={12} sm={6} md={4} lg={3} >
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
                        <p className='DetailContent'>A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover. </p>
                    </div>
                    <div className='BookDetailsGridItemthri' id='BookDetailsGridItem5'>
                        <div >OVERALL RATING</div>
                        <div ><StarOutlinedIcon id="star" /><StarOutlinedIcon id="star" /><StarOutlinedIcon id="star" /><StarBorderPurple500OutlinedIcon /><StarBorderPurple500OutlinedIcon /></div>
                        <div className='DetailContent'>According to the Goodreads system, three stars means “I liked it” and that's exactly how I feel. In every book that I have rated three stars, it still meant that overall I enjoyed reading the book. There are many, many three star books that I would (and do) whole heartedly recommend to others!</div>
                    </div>
                </Item>
            </Grid>
        </Grid>
    )
}

export default BookDetails
