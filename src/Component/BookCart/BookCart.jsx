import React from 'react'
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./BookCart.css"

import StarOutlinedIcon from '@mui/icons-material/StarOutlined';


function BookCart({ bookobj,setToggle,bookData }) {
    return (

        <Grid item container spacing={0} xs={12} sm={6} md={4} lg={3} >
            <Card className='paper' onClick={()=>{setToggle(false); bookData(bookobj)}} style={{ width: 250 }}  >
                <div className='ImageBox'>
                    <img src="https://archive.org/download/2019-Don-t-Make-Me-Think-Revisited/0321965515.jpg" alt="" />
                </div>
                <CardContent className='detailtextbox'>
                    <Typography className='BooknameBox' gutterBottom>
                        <div>{bookobj?.bookName}</div>
                    </Typography>
                    <Typography className='AuthorNameBox' >
                        <div >{bookobj?.author}</div>
                    </Typography>
                    <Typography className='RatingBox'>
                        <div id='Rating1'>3<StarOutlinedIcon id="rtstr1"/></div>
                        <div id='Rating2'>(20)</div>
                    </Typography>
                    <Typography className='PriceBox'>
                        <div id='discountbox'>Rs.{bookobj?.discountPrice}</div>
                        <div id='actualprice'>Rs.{bookobj?.price}</div>
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default BookCart
